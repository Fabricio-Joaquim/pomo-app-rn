export interface ICreateTaskForm {
    title: string;
    description: string;
    date: string;
    time: string;
    priority: string;
    id: string | null | undefined;
    status: boolean | undefined;
    archived: boolean | undefined;
}