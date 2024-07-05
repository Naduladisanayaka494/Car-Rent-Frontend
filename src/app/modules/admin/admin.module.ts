import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponenetComponent } from './components/admin-componenet/admin-componenet.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { NgZorroImportsModule } from '../../NgzorroImportsModule';


@NgModule({
  declarations: [AdminComponenetComponent, PostCarComponent],
  imports: [CommonModule, AdminRoutingModule, NgZorroImportsModule],
})
export class AdminModule {}
