import { Component, OnInit } from '@angular/core';
import { Note } from 'src/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  
  constructor() {
    const local = localStorage.getItem('notes-app');

    if (local) {
      this.notes = JSON.parse(local);
    } else {
      this.notes = [];
    }
  }

  ngOnInit(): void {
  }

  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index);
    localStorage.setItem('notes-app', JSON.stringify(this.notes));
  }

  addNote(note: Note) {
    this.notes.push(note);
    console.log(note)
    localStorage.setItem('notes-app', JSON.stringify(this.notes));
  }

}
