export type Status = 'todo' | 'pending' | 'done';
export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  title: string;
  id: string;
  status: Status;
  priority: Priority;
  points?: number;
};

export const statuses: Status[] = ['todo', 'pending', 'done'];
export const priorities: Priority[] = ['low', 'medium', 'high'];

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    status: 'todo',
    priority: 'high',
    points: 5,
  },
  {
    title: 'Computer Analysis',
    id: 'BUS-2',
    status: 'pending',
    priority: 'medium',
  },
  {
    title: 'Develop Marketing Strategy',
    id: 'BUS-4',
    status: 'done',
    priority: 'low',
    points: 5,
  },
];
