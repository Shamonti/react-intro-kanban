export type Task = {
  title: string;
  id: string;
  points?: number;
};

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    points: 5,
  },
  {
    title: 'Computer Analysis',
    id: 'BUS-2',
  },
  {
    title: 'Develop Marketing Strategy',
    id: 'BUS-4',
    points: 5,
  },
];
