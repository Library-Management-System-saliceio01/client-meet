import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit, OnDestroy {
  sub: Subscription

  nombre: FormControl = new FormControl('')
  fecha: FormControl = new FormControl('')
  estado: FormControl = new FormControl('')

  statusArray: string[] = ['pendiente', 'activo']

  form: FormGroup = new FormGroup({
    nombre: this.nombre,
    fecha: this.fecha,
    estado: this.estado
  })

  @Output() onFormChange: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value)
      this.onFormChange.emit(value)
    })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe()
  }
}
