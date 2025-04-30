import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  @Input() task = { title: '' };
  @Output() taskSaved = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  onSave() {
    if (this.task._id) {
      this.taskService.updateTask(this.task._id, this.task).subscribe(() => this.taskSaved.emit());
    } else {
      this.taskService.addTask(this.task).subscribe(() => this.taskSaved.emit());
    }
    this.task = { title: '' };
  }
}
