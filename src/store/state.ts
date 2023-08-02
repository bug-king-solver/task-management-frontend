export type TaskItem = {
  id: number;
  taskDesc: string;
  createdBy: string;
  assignedTo: string;
  editing: boolean;
};

export type State = {
  loading: boolean;
  tasks: TaskItem[];
  showCreateModal: boolean;
};

export const state: State = {
  loading: false,
  tasks: [],
  showCreateModal: false,
};
