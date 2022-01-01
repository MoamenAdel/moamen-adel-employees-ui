import { AngularFileUploaderModule } from 'angular-file-uploader';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
