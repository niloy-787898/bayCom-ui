import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'seller-auth',
        loadChildren: () => import('./seller-auth/seller-auth.module').then(m => m.SellerAuthModule)
      },
      {
        path: 'seller-home',
        loadChildren: () => import('./seller-home/seller-home-routing.module').then(m => m.SellerHomeRoutingModule),
        canActivate:[AuthGuard]
      },
      {
        path: '**',
        loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
