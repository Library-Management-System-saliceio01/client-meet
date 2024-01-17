import { Component } from '@angular/core';
import { TaskTableComponent } from '../../components/task-table/task-table.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-task',
  standalone: true,
  imports: [TaskTableComponent, TaskFormComponent,],
  templateUrl: './page-task.component.html',
  styleUrl: './page-task.component.scss'
})
export class PageTaskComponent {
  tareas: any[] = [...tareasDomesticas]

  form: any = {}

  onFormChange($event: any) {
    this.form = $event
  }

  onCreateTask() {
    const { nombre, fecha, estado } = this.form
    let newData = [...this.tareas, { nombre, fecha, status: estado }]
    this.tareas = newData
  }
}

const tareasDomesticas = [
  { nombre: "Limpiar la cocina", fecha: "2024-01-17", status: "Pendiente" },
  { nombre: "Lavar la ropa", fecha: "2024-01-18", status: "Activo" },
  { nombre: "Hacer la cama", fecha: "2024-01-19", status: "Pendiente" }
]

