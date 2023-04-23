import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './routedComponents/sign-in/sign-in.component';
import { InMainContentComponent } from './inDashboard/in-main-content/in-main-content.component';
const routes: Routes = [
  {path:"login",component:SignInComponent},
  {path:'',component:InMainContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
