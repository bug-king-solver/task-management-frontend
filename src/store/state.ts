export type TaskItem = {
  id: number;
  task: string;
  createdBy: string;
  assignedTo: string;
  editing: boolean;
};

export type State = {
  loading: boolean;
  tasks: TaskItem[];
};

export const state: State = {
  loading: false,
  tasks: [],
};
