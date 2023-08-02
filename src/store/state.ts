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
  showEditModal: boolean;
  showRemoveModal: boolean;
  editModalTaskId: number | undefined;
  removeModalTaskId: number | undefined;
};

export const state: State = {
  loading: false,
  tasks: [],
  showCreateModal: false,
  showEditModal: false,
  showRemoveModal: false,
  editModalTaskId: undefined,
  removeModalTaskId: undefined,
};
