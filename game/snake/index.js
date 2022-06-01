import { CONTEXT } from '../board/index.js'
import { getInputDirection } from './input.js';

export const SPEED = 5

let newSegments = 0

const snakeBody = [
    { x: 16, y: 16 },
]

export function update() {
    addSegments()

    const inputDirection = getInputDirection()

    for (let i = snakeBody.length - 2;  i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw() {
    snakeBody.map(segment => {
        CONTEXT.fillStyle = '#0F380F'
        CONTEXT.fillRect(segment.x, segment.y, 1, 1)
    });
}

export function collision(position) {
    return snakeBody.some(segment => {
        return position.x === segment.x && position.y === segment.y
    });
}

export function expandSnake(amount) {
    newSegments += amount
}

export function addSegments() {
    if (newSegments > 0) {
        snakeBody.push({
            ...snakeBody[snakeBody.length - 1]
        })

        newSegments -= 1
    }
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function hasSelfCollision(){
    return snakeBody.some((segment,index) => {
        if(index === 0) return false

        return getSnakeHead().x  === segment.x && getSnakeHead().y === segment.y
    })
}