import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth/guard/auth.guard';
import { BooksComponent } from './books/books.component';
import { LogoutComponent } from './auth/logout/logout.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        children: [
            {
              path: 'books',
              component: BooksComponent,
              canActivateChild: [authGuard]
            },
            {
                path: 'admin',
                component: AdminComponent,
                canActivateChild: [authGuard]
            },
        ],
    },
    {
        path: 'logout',
        component: LogoutComponent,
    },
    { 
        path: '',   
        redirectTo: '/login', 
        pathMatch: 'full',
    },
    { 
        path: '**', 
        component: PageNotFoundComponent,
    }
];
