import {
    SPEED,
    draw as snakeDraw,
    update as snakeUpdate,
    getSnakeHead,
    hasSelfCollision as hasSnakeSelfCollision
} from './snake/index.js'
import { draw as pointDraw, update as pointUpdate } from './point/index.js'
import { SCREEN, CONTEXT, isOverBoard } from './board/index.js'

let lastTimeRender = 0

function main(currentTime) {
    if (checkGameOver()) {
        if (confirm('Fim de jogo')) {
            window.location.reload()
            gameOver=false
        } else {
            window.requestAnimationFrame(main)
        }
    }

    window.requestAnimationFrame(main)

    const lastRender = (currentTime - lastTimeRender) / 1000

    if (lastRender < 1 / SPEED) return

    lastTimeRender = currentTime
    update()

    draw()
}

function update() {
    snakeUpdate()
    pointUpdate()
    checkGameOver()
}

function draw() {
    CONTEXT.clearRect(0, 0, 32, 32)
    snakeDraw()
    pointDraw()
}

function checkGameOver() {
    return isOverBoard(getSnakeHead()) || hasSnakeSelfCollision()
}

const button = document.getElementById('start')
button.onclick = () => {
    window.requestAnimationFrame(main)

}

// window.requestAnimationFrame(main)

