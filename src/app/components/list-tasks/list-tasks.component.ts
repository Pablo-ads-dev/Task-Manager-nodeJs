import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskService, Task } from '../../services/task.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  /**
   * Carrega todas as tasks e atualiza a lista no template
   */
  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: (err) => console.error('Erro ao buscar tasks:', err)
    });
  }

  /**
   * Dispara a criação de uma nova task e adiciona ao array
   */
  submitForm(form: NgForm): void {
    if (!form.valid) {
      console.log('Formulário inválido!');
      return;
    }

    const newTask = form.value as Task;
    this.taskService.createTask(newTask).subscribe({
      next: (created) => {
        this.tasks.push(created);
        form.resetForm();
      },
      error: (err) => console.error('Erro ao criar task:', err)
    });
  }

  /**
   * trackBy para otimizar renderização de listas
   */
  trackById(index: number, task: Task): number {
    return task.id;
  }

  /**
   * Exemplo de método para edição (implemente conforme necessidade)
   */
  editTask(task: Task): void {
    console.log('Edit task', task);
    // TODO: implementar edição
  }

  
  deleteTask(id: number): void {
    console.log('Delete task id', id);
    // TODO: implementar remoção
  }
}
