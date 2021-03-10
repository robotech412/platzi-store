import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from '../contact/components/contact.component';

import { ContactRoutingModule } from '../contact/contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule
    ]
})

export class ContactModule {

}
