import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtersValid, setFilter } from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filters: filtersValid[] = ['all', 'completed', 'pending'];
  filterCurrent: filtersValid = "all";
  soples=0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe((resp) => {
      this.filterCurrent = resp.filter;
      this.soples=resp.todos.filter((todo)=>!todo.completado).length;
    })
  }

  change(filter:filtersValid){
    this.store.dispatch(setFilter({filter}));
  }

  clearCompleted(){
    this.store.dispatch(clearCompleted());
  }

}
