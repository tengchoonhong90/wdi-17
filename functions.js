function startGame() {
  game.pause = false;
  snake.arr = [];
  snake.size = 10;
  game.score = 0;
  snake.direction = "right";
  grid = [];
  score.textContent = "0";

  //spawn snake randomly
  var randomX = Math.floor(Math.random() * game.size);
  var randomY = Math.floor(Math.random() * game.size);
  for (var i = snake.size - 1; i >= 0; i--) {
    snake.arr.push({x: i + randomX, y: randomY});
  }
  makeBoard();

  clearInterval(interval);
  interval = setInterval(function() {
    if (!game.pause)
      moveSnake();
  }, 1000 / game.speed);
};

function makeBoard() {
  board.textContent = "";
  for (i = 0; i < game.size; i++) {
    grid[i] = [];
    board.appendChild(document.createElement("div"));
    board.lastChild.classList.add("row");

    //create board as divs
    for (j = 0; j < game.size; j++) {
      grid[i][j] = board.lastChild.appendChild(document.createElement("div"));
      board.lastChild.lastChild.classList.add("cell");
    }
  }
  makeFood();
};

function drawSnake() {
  var cells = document.querySelectorAll(".cell");
  cells.forEach(function(cell) {
    cell.classList.remove("snake")
  });
  snake.arr.forEach(function(obj) {
    grid[obj.y][obj.x].classList.add("snake")
  });
};

function moveSnake() {
  var snakeX = snake.arr[0].x;
  var snakeY = snake.arr[0].y;

  switch(snake.direction) {
    case "right":
    snakeX += 1;
    break;
    case "down":
    snakeY += 1;
    break;
    case "left":
    snakeX -= 1;
    break;
    case "up":
    snakeY -= 1;
    break;
  }

  var tail = snake.arr.pop();

  if (snakeX >= grid.length) {
    snakeX = 0;
  }
  if (snakeX < 0) {
    snakeX = grid.length - 1;
  }
  if (snakeY >= grid.length) {
    snakeY = 0;
  }
  if (snakeY < 0) {
    snakeY = grid.length - 1;
  }

    //eat food
  if (snakeX == food.x && snakeY == food.y) {
    snake.size += 1;
    snake.arr.push({ x: tail.x, y: tail.y });
    var cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
      cell.classList.remove("food");
    });
    game.score += 1;
    score.textContent = game.score;
    makeFood();
  }

  tail.x = snakeX;
  tail.y = snakeY;

  if (collision(tail)) {
    snake.arr = [];
    startGame();
  } else {
    snake.arr.unshift(tail);
    drawSnake();
  }
};

function keybind(event) {
  if (event.key == "ArrowUp" && snake.direction !== "down") {
    snake.direction = "up";
  } else if (event.key == "ArrowDown" && snake.direction !== "up") {
    snake.direction = "down";
  } else if (event.key == "ArrowLeft" && snake.direction !== "right") {
    snake.direction = "left";
  } else if (event.key == "ArrowRight" && snake.direction !== "left") {
    snake.direction = "right";
  } else if (event.key == "w" && snake.direction !== "down") {
    snake.direction = "up";
  } else if (event.key == "a" && snake.direction !== "right") {
    snake.direction = "left";
  } else if (event.key == "s" && snake.direction !== "up") {
    snake.direction = "down";
  } else if (event.key == "d" && snake.direction !== "left") {
    snake.direction = "right";  
  } else if (event.key == " ") {
    game.pause = !game.pause;
    pause.style.display = game.pause ? "block" : "none";
  }
};

function makeFood() {
  do {
    food = {
      x: Math.floor(Math.random() * game.size),
      y: Math.floor(Math.random() * game.size),
    };
  } while (collision(food));
    grid[food.y][food.x].classList.add("food");
}

var collision = hitbox => snake.arr.some(item => item.x === hitbox.x && item.y === hitbox.y);