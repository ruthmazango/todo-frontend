import { Component, OnInit } from '@angular/core';
import {TodoService } from '../shared/todo.service';
import {ITodo } from '../shared/todo';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
 
  todos: ITodo[] =[]; 

 constructor(
    private todoService: TodoService,
    private router: Router
  ){}

 ngOnInit(): void {
     this.getTodos();
 }

 getTodos(): void{
  this.todoService.getAllTodos()
    .subscribe(todos => this.todos = todos);
 }

 delete(todo: ITodo) {
  if (todo) {
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.todoService.deleteTodo(todo).subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Task has been deleted',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['./']);
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong while deleting!',
            });
          }
        );
      }
    });
  }
}
}
