import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NavComponent } from './components/nav/nav.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'dashboard',
        component: DashboardAdminComponent
      },
      {
        path: 'table',
        component: AdminTableComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
