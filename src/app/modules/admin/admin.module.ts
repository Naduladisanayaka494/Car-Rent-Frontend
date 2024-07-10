import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponenetComponent } from './components/admin-componenet/admin-componenet.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { NgZorroImportsModule } from '../../NgzorroImportsModule';
import { UpdateCarComponent } from './components/update-car/update-car.component';


@NgModule({
  declarations: [AdminComponenetComponent, PostCarComponent, UpdateCarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AdminModule {}
