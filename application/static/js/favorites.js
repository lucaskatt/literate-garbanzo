function Favorite(last, num, heart, picid, username) {
  this.picid = picid;
  this.last = last;
  this.num = num;
  console.log(username);
  if (username !== "None"){
    this.username = username;
    this.heart = heart;
    heart.addEventListener("click", this, false);
  }
}

Favorite.prototype.handleEvent = function(e) {
  if (e.type === "click") {
    this.update();
  }
}

Favorite.prototype.change = function(last, num) {
  this.last.innerHTML = last;
  this.num.innerHTML = num;

}

Favorite.prototype.update = function() {
  makeFavoritePostRequest(this.picid, this.username, function() {
    console.log('POST successful.');
  });
  this.last.innerHTML = this.username;
  this.num.innerHTML = (+this.num.innerHTML) + 1;
  this.heart.disabled = true;
}


function makeFavoritePostRequest(picid, username, cb) {
  var data = {
    'id': picid,
    'username': username
  };

  qwest.post('/1ig16mvx6r/pa3/pic/favorites', data, {
    dataType: 'json',
    responseType: 'json'
  }).then(function(xhr, resp) {
    cb(resp);
  });
}


function makeFavoriteRequest(picid, cb) {
  qwest.get('/1ig16mvx6r/pa3/pic/favorites?id=' + picid)
    .then(function(xhr, resp) {
      cb(resp);
    });
}


function initFavorite(picid, username) {
  console.log('initing fav');
  var lastFavorited = document.getElementById("lastFavorited");
  var numFavorited = document.getElementById("numFavorited");
  var heart = document.getElementById("heart");
  var favoriteBinding = new Favorite(lastFavorited, numFavorited, heart, picid, username);

  makeFavoriteRequest(picid, function(resp) {
    favoriteBinding.change(resp['latest_favorite'], resp['num_favorites']);
  });

  setInterval(function() {
   makeFavoriteRequest(picid, function(resp) {
     favoriteBinding.change(resp['latest_favorite'], resp['num_favorites']);
    });
  }, 10000);
}
