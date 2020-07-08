import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { toogle, update, remove } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkCompletado: FormControl;
  txtInput: FormControl;
  editing: boolean = false;
  @ViewChild('inputEdit') inputEdit: ElementRef;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe((resp)=>{
      this.store.dispatch(toogle({id:this.todo.id}));
    });

  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(()=>{
      this.inputEdit.nativeElement.select();
    },1);
  }


  closeEdit() {
    this.editing = false;
    if(this.txtInput.invalid)return;
    if(this.txtInput.value===this.todo.texto)return;
    this.store.dispatch(update({id:this.todo.id,texto:this.txtInput.value}));
  }

  remove(){
    this.store.dispatch(remove({id:this.todo.id}));
  }



}
