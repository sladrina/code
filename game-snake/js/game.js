var field_size_x = 20;
var field_size_y = 20;
var snake_speed = 250;
var isGameStarted = false;
var snakeTimer;

var score = 0;

var direction = 'top';

var snake = [];

var snakeCoordX;
var snakeCoordY;

function init() {
    prepareGameField();
    document.getElementById('snake-start').addEventListener('click', startGameHandler);
    window.addEventListener('keydown', changeDirectionHandler);
}

function prepareGameField() {
    var gameTable = document.createElement('table');
    gameTable.classList.add('game-table');
    gameTable.id = 'game-table';

    for (var i = 0; i < field_size_x; i++) {
        var row = document.createElement('tr');
        row.classList.add('game-table-row');

        for (var j = 0; j < field_size_y; j++) {
            var cell = document.createElement('td');
            cell.classList.add('game-table-cell');
            row.appendChild(cell);
        }
        gameTable.appendChild(row);
    }
    document.getElementById('snake-field').appendChild(gameTable);
}

function startGameHandler() {
    isGameStarted = true;
    respawn();
    snakeTimer = setInterval(move, snake_speed);
    var createApple = createFood('apple');
    setTimeout(createApple, 500);
}

function refreshGameHandler() {
    window.location.reload();
}

function changeDirectionHandler(event) {
    switch (event.keyCode) {
        case 37:
            if (direction != 'right') direction = 'left';
            break;
        case 38:
            if (direction != 'bottom') direction = 'top';
            break;
        case 39:
            if (direction != 'left') direction = 'right';
            break;
        case 40:
            if (direction != 'top') direction = 'bottom';
            break;
    }
}

function respawn() {
    snakeCoordX = Math.floor(field_size_x / 2);
    snakeCoordY = Math.floor(field_size_y / 2);
    var gameTable = document.getElementById('game-table'); // голова
    var snakeHead = gameTable.children[snakeCoordX].children[snakeCoordY];
    snakeHead.classList.add('snake-unit'); // хвостик
    var snakeTail = gameTable.children[snakeCoordX + 1].children[snakeCoordY];
    snakeTail.classList.add('snake-unit');
    snake.push(snakeTail);
    snake.push(snakeHead);
}

function move() {
    var gameTable = document.getElementById('game-table');
    var newUnit;

    var i = 18;
    switch (direction) {
        case 'top':
            if (snakeCoordX == 0){
                newUnit = gameTable.children[field_size_x-1].children[snakeCoordY];
                snakeCoordX = field_size_x;
                snakeCoordX--;
            } else newUnit = gameTable.children[--snakeCoordX].children[snakeCoordY];
            break;
        case 'bottom':
            if(snakeCoordX == field_size_x-1){
                newUnit = gameTable.children[0].children[snakeCoordY];
                snakeCoordX = -1;
                snakeCoordX++;
            }else newUnit = gameTable.children[++snakeCoordX].children[snakeCoordY];
            break;
        case 'right':
            if(snakeCoordY == field_size_y-1){
                newUnit = gameTable.children[snakeCoordX].children[0];
                snakeCoordY = -1;
                snakeCoordY++;
            } else newUnit = gameTable.children[snakeCoordX].children[++snakeCoordY];
            break;
        case 'left':
            if (snakeCoordY == 0){
                newUnit = gameTable.children[snakeCoordX].children[field_size_y-1];
                snakeCoordY = field_size_y;
                snakeCoordY--;
            } else newUnit = gameTable.children[snakeCoordX].children[--snakeCoordY];
            break;
    }

    if (!isSnakeUnit(newUnit)) {
        newUnit.classList.add('snake-unit');
        snake.push(newUnit);

        if (!isFood(newUnit)) {
            var snakeRemoved = snake.shift();
            snakeRemoved.classList.remove('snake-unit');
        }
    } else {
        gameOver();
    }
}

function isSnakeUnit(unit) {
    return snake.includes(unit);
}

function isFood(unit) {
    if (unit.classList.contains('food-unit')) {
        unit.classList.remove('food-unit');
        score++;
        addScore(score);
        createFood('apple');
        createFood('mongoose');
        return true;
    } else if (unit.classList.contains('mongoose-unit')){
        gameOver();
    }
    else {
        return false;
    }
}

function createFood(obj) {
    var foodCreated = false;
    var gameTable = document.getElementById('game-table');
    while (!foodCreated) {
        var foodX = Math.floor(Math.random() * field_size_x);
        var foodY = Math.floor(Math.random() * field_size_y);
        var foodCell = gameTable.children[foodX].children[foodY];

        if (!foodCell.classList.contains('snake-unit')) {
            if (obj == 'apple') foodCell.classList.add('food-unit');
            if (obj == 'mongoose') foodCell.classList.add('mongoose-unit');
            foodCreated = true;
        }
    }
}

function gameOver() {
    isGameStarted = false;
    clearInterval(snakeTimer);
    alert('Игра завершена');
    refreshGameHandler();
}

function addScore(score){
    var totalScore=document.getElementById('total-score');
    totalScore.innerText = score;
}
window.onload = init;
