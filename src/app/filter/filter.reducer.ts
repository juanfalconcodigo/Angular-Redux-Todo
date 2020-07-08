import { createReducer, on } from '@ngrx/store';
import { setFilter,filtersValid } from './filter.actions';

const initialState:filtersValid = 'all';
const _filterReducer = createReducer(initialState,
    on(setFilter, (state, { filter }) => filter)
);

export const filterReducer=(state,action)=>{
    return _filterReducer(state,action);
}