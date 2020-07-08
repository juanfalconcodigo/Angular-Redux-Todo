import { Component, OnInit,OnDestroy } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtersValid } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnDestroy {
  allSubscription:Subscription=null;
  todos:Todo[]=[];
  filter:filtersValid='all';
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.allSubscription=this.store.subscribe((resp)=>{
      this.todos=resp.todos;
      this.filter=resp.filter;
    });
  }
  ngOnDestroy(){
    this.allSubscription.unsubscribe();
  }

}
