import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InFooterComponent } from './inDashboard/in-footer/in-footer.component';
import { InHeaderComponent } from './inDashboard/in-header/in-header.component';
import { InMainContentComponent } from './inDashboard/in-main-content/in-main-content.component';
import { SignInComponent } from './routedComponents/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    InFooterComponent,
    InHeaderComponent,
    InMainContentComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
