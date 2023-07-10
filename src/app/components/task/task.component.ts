import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() {}

  ngOnInit(): void{

  }

  deleteTask(){
    console.log("Eliminar tarea", this.task?.title);
    this.delete.emit(this.task); //notificasmoa al componente superior la tarea a eliminar
  }
}
