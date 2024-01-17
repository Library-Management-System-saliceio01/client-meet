import { Task } from "../../interfaces/task.interface";

export interface TableConfig {
  data: Task[];
  columns: Columns[];
}

export interface Columns {
  caption: string
  key: string | any
}
