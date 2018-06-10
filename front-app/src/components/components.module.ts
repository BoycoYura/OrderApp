import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us';
import { OrderInfoComponent } from './order-info/order-info';
@NgModule({
	declarations: [ContactUsComponent,
    OrderInfoComponent],
	imports: [],
	exports: [ContactUsComponent,
    OrderInfoComponent]
})
export class ComponentsModule {}
