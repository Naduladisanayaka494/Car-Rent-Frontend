import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponenetComponent } from './components/admin-componenet/admin-componenet.component';

const routes: Routes = [
  {path:"dashboard",component:AdminComponenetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
