import { createAction, props } from '@ngrx/store';

export type filtersValid='all'|'completed'|'pending';

export const setFilter=createAction('[FILTER] Set Filter',props<{filter:filtersValid}>());
