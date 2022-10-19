//<!--TIPYSCRIPE DEL HOME-->
import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public tasks: string[];
  public task: string; //tarea individual

  // voy a recibir un atributo en el constructor y también
  constructor(private taskService: TasksService) {
    this.tasks = this.taskService.getTasks();
    this.task = 'algo';
  }

  public addTask() {
    this.taskService.addTask(this.task);
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
    this.task = '';
  }
  /*Darle enter en lugar del botón
  regresar el foco, del cursor.
*/
  public removeTask(pos: number) {
    this.taskService.removeTask(pos);
    this.tasks = this.taskService.getTasks();
  }

  onKeydown(event: Event){
    this.addTask()
  }
}
