import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeeComponent } from './see/see.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path: '', component: SeeComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
