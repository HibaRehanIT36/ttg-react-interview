export interface Task {
  id: number;
  title: string;
  description?: string;
  date: string;
}

export type AddToDoProps = {
  open: boolean;
  handleClose: () => void;
};

export interface TaskFormValues {
  title: string;
  description: string;
};
