import { Component, OnInit, inject } from '@angular/core';
import {TodoService } from '../shared/todo.service';
import {ITodo } from '../shared/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  
  todo: ITodo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ){}
  
  ngOnInit(): void {
    
    const todoId = Number(this.route.snapshot.params['id']);
    
    this.todoService.getTodoById(todoId).subscribe(
      todo => {
        this.todo = todo; // Assign the retrieved todo to this.todo
      });
  }
}
