import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponenetComponent } from './components/admin-componenet/admin-componenet.component';
import { PostCarComponent } from './components/post-car/post-car.component';

const routes: Routes = [
  { path: "dashboard", component: AdminComponenetComponent },
  {path:"car",component:PostCarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
