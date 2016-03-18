var imgs = [
  '/static/pictures/football_s1.jpg',
  '/static/pictures/sports_s1.jpg',
  '/static/pictures/sports_s4.jpg',
];

var audio = [
  '',
  '',
  ''
];

var round = 0;
var correct = 0;
var interval;

$(function () {
  round = 0;
  $(".gif").hide();
});

function start(){
  $("#butt").hide();
  runTrial();
}

function runTrial(){
  round++;
  order = [0, 1, 2];
  order = shuffle(order);
  correct = order[getRandomInt(0, order.length)];

  //assign gif urls
  $("#img_0").attr("src", imgs[order[0]]);
  $("#img_1").attr("src", imgs[order[1]]);
  $("#img_2").attr("src", imgs[order[2]]);

  $(".gif").show();

  //play audio of correct
  if (audio[correct] != ''){
    var aud = new Audio(audio[correct]);
    aud.play();

    //repeat every 4 seconds
    interval = setInterval(function(){
      audio.play();
    }, 5000);
  }
}

function selectGif(guess){
  if (order[guess] == correct){
    correctSelection();
  }
  else {
    incorrectSelection();
  }
}

function correctSelection() {
  if (round >= 9){
    finish();
  }
  else{
    runTrial();
  }
}

function incorrectSelection(){
  $(".gif").hide();
  setTimeout(function(){
    if (round >= 9){
      finish();
    }
    else{
      runTrial();
    }
  }, 2000);
}

function finish(){
  $(".gif").hide();
  setTimeout(function(){
    $("#butt").show();
  }, 1000);
}


function shuffle(list){
  for (var i = 0; i < list.length; i++){
    temp = list[i];
    random = getRandomInt(0, list.length);
    list[i] = list[random];
    list[random] = temp;
    return list;
  }
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
