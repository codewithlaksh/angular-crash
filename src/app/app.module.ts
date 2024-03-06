import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { HttpClientModule } from '@angular/common/http';

enableProdMode()

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteItemComponent,
    AddNoteComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
