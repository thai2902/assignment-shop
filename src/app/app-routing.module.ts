import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/shop/shop.module#ShopModule' },
  { path: 'page-not-found', loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule'},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
