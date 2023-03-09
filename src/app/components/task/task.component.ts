import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../services/task-repository.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    public readonly editing$ = new BehaviorSubject<boolean>(false);

    public readonly editForm = new FormGroup({
        content: new FormControl('Test', [Validators.required]),
    });

    @Input() task!: Task;
    @Output() updateContent = new EventEmitter<string>();
    @Output() done = new EventEmitter<void>();
    @Output() notDone = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    @HostBinding('class.done')
    get isDone() {
        return this.task.done;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
