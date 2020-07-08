import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Crear todo', props<{ texto: string }>());
export const toogle=createAction('[TODO] Toogle todo',props<{id:number}>());
export const update=createAction('[TODO] Update todo',props<{id:number,texto:string}>());
export const remove=createAction('[TODO] Delete todo',props<{id:number}>());
export const toggleAll=createAction('[TODO] ToggleAll todo',props<{completado:boolean}>());
export const clearCompleted=createAction('[TODO] ClearCompleted todo');