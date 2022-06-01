const inputDirection = {
    x: 0,
    y: 0
}

let lastInputDirection = {
    x: 0,
    y: 0
}

function changeDirection(input) {
    const acceptedMoves = {
        ArrowUp() {
            if (lastInputDirection.y) return
            inputDirection.x = 0
            inputDirection.y = -1
        },
        ArrowDown() {
            if (lastInputDirection.y) return
            inputDirection.x = 0
            inputDirection.y = 1
        },
        ArrowLeft() {
            if (lastInputDirection.x) return
            inputDirection.x = -1
            inputDirection.y = 0
        },
        ArrowRight() {
            if (lastInputDirection.x) return
            inputDirection.x = 1
            inputDirection.y = 0
        }
    }
    const { key } = input
    const moveFunction = acceptedMoves[key]

    window.removeEventListener('keydown', changeDirection);
    setTimeout(function () {
        window.addEventListener('keydown', changeDirection);
    }, 1000/7);

    if (moveFunction) {
        moveFunction()
    }
}

window.addEventListener('keydown', changeDirection)

export function getInputDirection() {
    const coolDown = 1000 / 7
    let lastClick = Date.now() - coolDown

    const notOver = Date.now() - lastClick < coolDown
    if (notOver) return

    lastInputDirection = inputDirection
    return inputDirection
}