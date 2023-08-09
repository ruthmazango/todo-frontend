import { Component, OnInit } from '@angular/core';
import {TodoService } from '../shared/todo.service';
import {ITodo } from '../shared/todo';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
 
  todos: ITodo[] =[]; 

 constructor(private todoService: TodoService){}

 ngOnInit(): void {
     this.getTodos();
 }

 getTodos(): void{
  this.todoService.getAllTodos()
    .subscribe(todos => this.todos = todos);
 }
}
