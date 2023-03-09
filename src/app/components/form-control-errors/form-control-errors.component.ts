import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
    selector: '[appFormControlErrors]',
    templateUrl: './form-control-errors.component.html',
    styleUrls: ['./form-control-errors.component.scss'],
})
export class FormControlErrorsComponent implements OnInit {
    control: AbstractControl | undefined;

    @Input() controlName!: string;

    constructor(
        @Optional() @Host() private readonly parent: ControlContainer,
    ) {
    }

    ngOnInit(): void {
        if (this.parent instanceof FormGroupDirective) {
            this.control = this.parent.form?.get(this.controlName) ?? undefined;
        }
    }
}
