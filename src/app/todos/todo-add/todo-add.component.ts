import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Validators,FormGroup,FormControl, Form } from '@angular/forms';
import { create } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  forma:FormGroup=null;
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
    this.forma=new FormGroup({
      texto:new FormControl('',Validators.required)
    })
  }

  submit(){
    if(this.forma.invalid){
      console.log('Formulario inválido');
      return;
    }
    console.log(this.forma.value);
    this.store.dispatch(create(this.forma.value));
    this.forma.reset({
      texto:""
    });
    
  }

}
