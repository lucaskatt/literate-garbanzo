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
var order = [0, 0, 0];
var oldOrder = [0, 0, 0];
var prevCorrect = [3, 3];
var counts = [0, 0, 0];

var successColor = "#90C3D4";
var failColor = "#000";

$(function () {
  round = 0;
  $(".gif").hide();
});

function start(){
  $("#butt").hide();
  $(".navbar-brand").hide();
  order = [0, 0, 0];
  oldOrder = [0, 0, 0];
  prevCorrect = [3, 3];
  counts = [0, 0, 0];
  runTrial();
}

function runTrial(){
  round++;
  oldOrder = order;
  order = [0, 1, 2];
  order = shuffle(order);
  while (isEqual(order, oldOrder)){
    order = shuffle(order);
    console.log("1");
  }
  correct = order[getRandomInt(0, order.length)];
  while (counts[correct] > 2 || (prevCorrect[0] == correct && prevCorrect[1] == correct)){
    correct = order[getRandomInt(0, order.length)];
    console.log("2");
  }
  counts[correct]++;
  prevCorrect[1] = prevCorrect[0];
  prevCorrect[0] = correct;

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
  $(".gif").hide();
  setTimeout(function(){
    if (round >= 9){
      finish();
    }
    else{
      runTrial();
    }
  }, 1000);
}

function incorrectSelection(){
  $(".gif").hide();
  $("body").css("background-color", failColor);
  setTimeout(function(){
    if (round >= 9){
      $("body").css("background-color", successColor);
      finish();
    }
    else{
      $("body").css("background-color", successColor);
      runTrial();
    }
  }, 2000);
}

function finish(){
  round = 0;
  order = [0, 0, 0];
  oldOrder = [0, 0, 0];
  prevCorrect = [3, 3];
  counts = [0, 0, 0];
  correct = 0;
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

function isEqual(a, b){
  if (a.length != b.length){
    return false;
  }
  for (var i = 0; i < a.length; i++){
    if (a[i] != b[i]){
      return false;
    }
  }
  return true;
}
