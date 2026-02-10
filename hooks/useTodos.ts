import { useReducer, useRef } from 'react';
import {Task, TodoAction} from '../types/todosTypes';

export interface TodoState {
    tasks: Task[]
}

const initialState: TodoState = {
    tasks: []
}

const todoReducer = (state: TodoState, action: TodoAction
): TodoState => {
    switch (action.type) {
        case 'ADD':
            return {...state, tasks:[
                ...state.tasks, {
                    id:Date.now().toString(),
                    name:action.payload,
                    done:false
                }]
            }
        case 'TOGGLE':
            return{...state, tasks:state.tasks.map(task =>
                task.id === action.payload
                ? {...task, done: !task.done}
                :task
            )}
        case 'REMOVE':
            return {...state, tasks: state.tasks.filter (
                task => task.id !== action.payload
            )}

        default:
            return state
    }
}

export const useTodos = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleAdd = (text: string) => {
        dispatch({type: 'ADD', payload: text})
    }

    const handleToggle = (id:string): void => {
        dispatch({type: 'TOGGLE', payload: id})
    }

    const handleRemove = (id:string): void => {
        dispatch({type: 'REMOVE', payload: id})
    }
    return {
        state,
        handleAdd,
        handleToggle,
        handleRemove
    }
}