import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//firebase
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from 'src/environments/environment';
import { PERSISTENCE } from '@angular/fire/compat/auth';

//pdf make
// Import pdfmake-wrapper and the fonts to use
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: PERSISTENCE, useValue: 'session'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
