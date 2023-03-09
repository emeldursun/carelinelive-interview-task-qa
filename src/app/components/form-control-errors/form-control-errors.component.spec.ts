import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControlErrorsComponent } from './form-control-errors.component';

describe('FormControlErrorsComponent', () => {
    let component: FormControlErrorsComponent;
    let fixture: ComponentFixture<FormControlErrorsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormControlErrorsComponent],
            imports: [ReactiveFormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormControlErrorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
