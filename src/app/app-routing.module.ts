import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'desarrollo',
    loadChildren: () => import('./desarrollo/desarrollo.module').then( m => m.DesarrolloPageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'iot',
    loadChildren: () => import('./iot/iot.module').then( m => m.IotPageModule)
  },
  {
    path: 'iot',
    loadChildren: () => import('./iot/iot.module').then( m => m.IotPageModule)
  },
  {
    path: 'iot',
    loadChildren: () => import('./iot/iot.module').then( m => m.IotPageModule)
  },
  {
    path: 'ingles',
    loadChildren: () => import('./ingles/ingles.module').then( m => m.InglesPageModule)
  },
  {
    path: 'integradora',
    loadChildren: () => import('./integradora/integradora.module').then( m => m.INTEGRADORAPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
