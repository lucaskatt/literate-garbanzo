var imgs = [
  '/static/pictures/run.gif',
  '/static/pictures/kick.gif',
  '/static/pictures/throw.gif'
];

var audio = [
  '/static/audio/running.m4a',
  '/static/audio/kicking.m4a',
  '/static/audio/throwing.m4a'
];

var round = 0;
var correct = 0;
var interval;
var aud;

$(function () {
  round = 0;
  $(".gif").hide();
});

function start(){
  $("#butt").hide();
  $(".navbar-brand").hide();
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
    aud = new Audio(audio[correct]);
    aud.play();

    //repeat every 4 seconds
    interval = setInterval(function(){
      aud.play();
    }, 5000);
  }
}

function selectGif(guess){
  aud.pause();
  clearInterval(interval);
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
  round = 0;
  $(".gif").hide();
  setTimeout(function(){
    $("#butt").show();
    $(".navbar-brand").show();
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
