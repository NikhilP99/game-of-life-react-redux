export function toggleStatus(x,y){
    return {
        type: "TOGGLE_STATUS",
        payload: {
            x,
            y
        }
    }
}

export function randomBoard(){
    return {
        type: "RANDOM_GRID"
    }
}

export function clearBoard(){
    return {
        type: "CLEAR"
    }
}

export function next(){
    return {
        type: "NEXT"
    }
}

export function play(timerId){
    return {
        type: "PLAY",
        timerId
    }
}

export function pause(){
    return {
        type: "PAUSE"
    }
}
