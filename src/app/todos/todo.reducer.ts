import { createReducer, on } from '@ngrx/store';
import { create, toogle, update, remove, toggleAll,clearCompleted } from './todo.actions';
import { Todo } from './models/todo.model';

const initialState: Todo[] = [
    new Todo('primer texto'),
    new Todo('segundo texto'),
    new Todo('tercer texto')
];

const _todoReducer = createReducer(initialState,
    on(create, (state, { texto }) => [...state, new Todo(texto)]),
    on(toogle, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return {
                    ...todo
                }
            }
        });
    }),
    on(update, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto
                }
            } else {
                return {
                    ...todo
                }
            }
        });
    }),
    on(remove, (state, { id }) => {
        return state.filter((todo) => {
            return todo.id !== id
        });
    }),
    on(toggleAll,(state,{completado})=>{
        return state.map((todo)=>{
             return {
                 ...todo,
                 completado
             }
        });
    }),
    on(clearCompleted,state=>state.filter(todo=>!todo.completado))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}