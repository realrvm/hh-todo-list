export type TaskSchema = {
  id: string;
  title: string;
  priority: string;
  deadline: string;
  description: string;
  label: string;
  completed?: boolean;
};
