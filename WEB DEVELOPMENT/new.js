const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const snakeColor = "green";
const foodColor = "red";

let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 10 };

let dx = gridSize;
let dy = 0;

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = snakeColor;
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        // Snake ate the food
        food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
        food.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
    } else {
        snake.pop(); // Remove the tail
    }
}

function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    ) {
        clearInterval(gameInterval);
        alert("Game Over! You hit the boundary.");
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    moveSnake();
    checkCollision();
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            dx = -gridSize;
            dy = 0;
            break;
        case "ArrowRight":
            dx = gridSize;
            dy = 0;
            break;
        case "ArrowUp":
            dx = 0;
            dy = -gridSize;
            break;
        case "ArrowDown":
            dx = 0;
            dy = gridSize;
            break;
    }
});

const gameInterval = setInterval(gameLoop, 100);
