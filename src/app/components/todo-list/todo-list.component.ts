import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskRepositoryService } from '../../services/task-repository.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    readonly trackTasks = (index: number, task: Task) => task.id;

    readonly addingTask$ = new BehaviorSubject(false);

    addTaskForm = new FormGroup({
        content: new FormControl(null, [Validators.required]),
    });

    constructor(
        public readonly tasksRepository: TaskRepositoryService,
    ) {
    }

    ngOnInit(): void {
    }

}
