import { CONTEXT, generateRandomBoardPosition } from "../board/index.js"
import { collision as snakeCollision, expandSnake } from "../snake/index.js";

const expansionRate = 4

let foodPosition = generateRandomPosition() 

export function update() {
    if(snakeCollision(foodPosition)){
        expandSnake(expansionRate)
        foodPosition = generateRandomPosition()
    }
}
export function draw() {
    CONTEXT.fillStyle = '#8BAC0F'
    CONTEXT.fillRect(foodPosition.x, foodPosition.y, 1, 1)
}

function generateRandomPosition() {
    let newFoodPosition;

    while (!newFoodPosition || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition()
    }

    return newFoodPosition
}