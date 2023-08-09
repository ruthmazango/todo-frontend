import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ITodo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/api/v1/todo/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Create a todo
  createTodo(title: string, description: string): Observable<ITodo> {
    const todoData: ITodo = { title, description };
    return this.http.post<ITodo>(`${this.baseUrl}create-todo`, todoData, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get all todos
  getAllTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get todo by id
  getTodoById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.baseUrl}${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update todo
  updateTodo(todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`${this.baseUrl}${todo.id}`, todo, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete todo
  deleteTodo(todo: ITodo): Observable<ITodo> {
    return this.http.delete<ITodo>(`${this.baseUrl}${todo.id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return new Observable<never>();
  }
}
