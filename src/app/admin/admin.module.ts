import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardAdminComponent, AdminTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
