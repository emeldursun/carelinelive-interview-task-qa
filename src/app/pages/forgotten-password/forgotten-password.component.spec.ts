import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ForgottenPasswordComponent } from './forgotten-password.component';

describe('ForgottenPasswordComponent', () => {
    let component: ForgottenPasswordComponent;
    let fixture: ComponentFixture<ForgottenPasswordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForgottenPasswordComponent],
            imports: [RouterTestingModule, ReactiveFormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ForgottenPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
