import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private BASE_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.BASE_URL}/tasks`);
  }

  addTask(task: any) {
    return this.http.post(`${this.BASE_URL}/task`, task);
  }

  updateTask(id: string, task: any) {
    return this.http.put(`${this.BASE_URL}/task/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.BASE_URL}/task/${id}`);
  }
}
