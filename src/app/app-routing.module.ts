
import { ItemFormComponent } from './item-form/item-form.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ItemShopComponent } from './item-shop/item-shop.component';
import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
  { path: 'buyitem/:id', component: ItemShopComponent},
  { path: 'hero-form', component: HeroFormComponent},
  { path: 'item-form', component: ItemFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}