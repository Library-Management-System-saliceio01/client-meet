import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { TableConfig } from '../table/table.interfaces';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [TableComponent,],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.scss'
})
export class TaskTableComponent implements OnInit, OnChanges {
  @Input({ required: true }) data: any[] = []

  tableConfig: TableConfig = {
    data: [...this.data],
    columns: [
      {
        caption: "Nombre",
        key: "nombre"
      },
      {
        caption: "Fecha",
        key: "fecha"
      },
      {
        caption: "Status",
        key: "status"
      }
    ]
  }

  ngOnInit(): void {
    this.tableConfig = {
      ...this.tableConfig,
      data: [...this.data]
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.tableConfig = {
        ...this.tableConfig,
        data: [...this.data]
      }
    }
  }
}
