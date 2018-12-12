var game = {
    scoreCurrent: 0,
    scoreHigh: 0,
    pause: false,
    size: 50,
    speed: 20,
    difficulty: "normal",
};

var snake = {
    size: 10,
    arr: [],
    direction: "",
};

var board = document.querySelector(".board");
var pause = document.querySelector(".pause");
var pausePrompt = document.querySelector(".pauseprompt")
var scoreHolder = document.querySelector(".scoreCurrent");
var highScore = document.querySelector(".highscore");
highScore.textContent = "High Score: 0";

var interval = null;
var grid = [];
var food = {};
