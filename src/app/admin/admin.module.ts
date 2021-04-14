import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardAdminComponent, AdminTableComponent, ProductsListComponent, FormProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
