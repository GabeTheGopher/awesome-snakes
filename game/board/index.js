export const SCREEN = document.getElementById('screen')
export const CONTEXT = SCREEN.getContext('2d')

export function generateRandomBoardPosition(){
    return {
        x: Math.floor(Math.random() * SCREEN.width),
        y: Math.floor(Math.random() * SCREEN.height)
    }
}

export function isOverBoard(position) {

    return position.x >= SCREEN.width || position.x < 0 || position.y >= SCREEN.height || position.y < 0
}