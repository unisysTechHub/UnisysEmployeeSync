import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     AmplifyUIAngularModule,
     AmplifyAngularModule

  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
