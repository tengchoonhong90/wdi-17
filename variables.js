var game = {
    score: 0,
    pause: false,
    size: 50,
    speed: 20,
};

var snake = {
    size: 10,
    arr: [],
    direction: "",
};


var board = document.querySelector(".board");
var pause = document.querySelector(".pause");
var score = document.querySelector(".score");
var interval = null;
var grid = [];
var food = {};