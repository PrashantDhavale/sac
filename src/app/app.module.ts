import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatSidenavModule, 
  MatButtonModule, 
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule  } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SacMainComponent } from './sac-main/sac-main.component';
import { SacBasicInputComponent } from './sac-basic-input/sac-basic-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SacMainComponent,
    SacBasicInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
