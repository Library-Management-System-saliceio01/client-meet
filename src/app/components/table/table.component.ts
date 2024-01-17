import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from './table.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  @Input({ required: true }) tableConfig: any = {} as any

  get tableData(): any[] {
    return this.tableConfig.data
  }

  ngOnInit(): void {
  }
}
