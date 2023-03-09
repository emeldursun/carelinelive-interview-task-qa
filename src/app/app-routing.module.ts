import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'forgotten-password', component: ForgottenPasswordComponent, canActivate: [NotAuthenticatedGuard] },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
