import { Routes } from '@angular/router';
import { RouterPaths } from './app.constants';
import { LayoutComponent } from './component/layout/layout.component';
import { ShowroomManagementComponent } from './pages/showroom-management/showroom-management/showroom-management.component';
import { CarManagementComponent } from './pages/car-management/car-management.component';

export const routes: Routes = [
    { path: '**', redirectTo: RouterPaths.LOGIN, pathMatch: 'full' },
    { path: '', redirectTo: RouterPaths.HOME, pathMatch: 'full' },
    {
        path: RouterPaths.HOME,
        component: LayoutComponent,
        children: [
            {
                path: RouterPaths.SHOWROOM_MANAGEMENT,
                component: ShowroomManagementComponent,
            },
            {
                path: RouterPaths.CAR_MANAGEMENT,
                component: CarManagementComponent,
            },
        ]
    }

];

