import { Component, OnInit } from '@angular/core';
import {TodoService } from '../shared/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  // @Input() todo!: ITodo;

  todoForm!: FormGroup;

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder
  ){}
  
  ngOnInit(): void {
    
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {

      this.todoService.createTodo(
        this.todoForm.value.title ?? '',
        this.todoForm.value.description).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Task has been saved',
            showConfirmButton: false,
            timer: 1500
          })
            this.todoForm.reset();
  
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
    }
  }
}
