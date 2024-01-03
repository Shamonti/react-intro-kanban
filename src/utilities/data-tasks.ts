export type Status = 'todo' | 'pending' | 'done';

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};

export const statuses: Status[] = ['todo', 'pending', 'done'];

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    status: 'todo',
    points: 5,
  },
  {
    title: 'Computer Analysis',
    id: 'BUS-2',
    status: 'pending',
  },
  {
    title: 'Develop Marketing Strategy',
    id: 'BUS-4',
    points: 5,
    status: 'done',
  },
];
