import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [
  {path:'Home',component:HomecomponentComponent},
  {path:'Detail',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }