export interface Task{
    id: string
    name: string
    done: boolean
}

export type TodoAction = 
    |{type: 'ADD'; payload: string}
    |{type: 'TOGGLE'; payload: string}
    |{type: 'REMOVE'; payload: string}
