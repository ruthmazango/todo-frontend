import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { ITodo } from '../shared/todo';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  
  todo: ITodo | undefined;

  todoUpdateForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private fb: FormBuilder
  ){}
  
  ngOnInit(): void {
    
    const todoId = Number(this.route.snapshot.params['id']);
    
    this.todoService.getTodoById(todoId).subscribe(
      todo => {
        this.todo = todo; // Assign the retrieved todo to this.todo
      });

    this.todoUpdateForm = this.fb.group({
      title: [this.todo?.title, Validators.required],
      description: [this.todo?.description, Validators.required],
    });
  }

  onSubmit() {
    if (this.todoUpdateForm && this.todo) {
      const updatedTodo = {
        ...this.todo,
        ...this.todoUpdateForm.value,
      };

      this.todoService.updateTodo(updatedTodo).subscribe((updated) => {
        Swal.fire({
          icon: 'success',
          title: 'Task has been updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.todo = updated; // Update the displayed todo with the updated values
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
