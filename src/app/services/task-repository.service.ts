import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
    id: number;
    content: string;
    done: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TaskRepositoryService {
    private _tasks: Task[] = [
        { id: 1, content: 'Write Cypress tests', done: false },
        { id: 2, content: 'Write unit tests', done: false },
        { id: 3, content: 'Fix bugs', done: false },
    ];

    public readonly tasks$ = new BehaviorSubject<Task[]>(this._tasks);

    constructor() {
    }

    addTask(task: Omit<Task, 'id' | 'done'>) {
        this._tasks.push({
            ...task,
            id: Math.max(...this._tasks.map(t => t.id), 0) + 1,
            done: false,
        });

        this._notifyTasksChanged();
    }

    updateTaskContent(task: Task, content: string): void {
        const index = this._tasks.findIndex(t => t.id === task.id);

        if (index === -1) {
            throw new Error(`Task ${task.id} not found`);
        }

        this._tasks[index] = { ...task, content };

        this._notifyTasksChanged();
    }

    removeTask(task: Task | number) {
        if (typeof task === 'number') {
            this._tasks = this._tasks.filter(t => t.id !== task);
        } else {
            this._tasks = this._tasks.filter(t => t.id !== task.id);
        }
    }

    private _notifyTasksChanged(): void {
        this.tasks$.next(this._tasks);
    }

    markAsDone(task: Task): void {
        const index = this._tasks.findIndex(t => t.id === task.id);

        if (index === -1) {
            throw new Error(`Task ${task.id} not found`);
        }

        this._tasks[index] = { ...task, done: true };

        this._notifyTasksChanged();
    }

    markAsNotDone(task: Task): void {
        const index = this._tasks.findIndex(t => t.id === task.id);

        if (index === -1) {
            throw new Error(`Task ${task.id} not found`);
        }

        this._tasks[index] = { ...task, done: false };

        this._notifyTasksChanged();
    }

    markAllAsDone(): void {
        this._tasks = this._tasks.map(t => ({ ...t, done: true }));

        this._notifyTasksChanged();
    }
}
