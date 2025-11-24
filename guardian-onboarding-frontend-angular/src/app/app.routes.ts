import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/pages/login-page/login-page').then(m => m.LoginPage)
    },
    {
        path: 'admin',
        loadComponent: () => import('./shared/layots/admin-layout/admin-layout').then(m => m.AdminLayout),
        children: [
            {
                path: 'onboarding',
                loadComponent: () => import('./features/onboarding/pages/onboarding/onboarding').then(m => m.Onboarding)
            },
            {
                path: 'products',
                loadComponent: () => import('./features/products/pages/products-page/products-page').then(m => m.ProductsPage)
            }
        ]
    }
];
