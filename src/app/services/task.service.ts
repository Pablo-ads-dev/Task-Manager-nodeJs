import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Define aqui a interface Task ou importe de um arquivo de modelo separado
 */
export interface Task {
  id: number;
  name: string;
  priority: string;
  difficult: string;
  createdAt: string;
  updatedAt: string;
  status: string
  // adicione outras propriedades conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  /**
   * Retorna um Observable com o array de Task
   */
  getTasks(limit: number = 5): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?_limit=${limit}`);
  }

  /**
   * Cria uma nova task e retorna o objeto criado
   */
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
