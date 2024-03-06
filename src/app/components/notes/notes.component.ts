import { Component, OnInit } from '@angular/core';
import { Note } from 'src/notes';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  
  constructor(private notesService: NotesService) {
    // const local = localStorage.getItem('notes-app');

    // if (local) {
    //   this.notes = JSON.parse(local);
    // } else {
    //   this.notes = [];
    // }
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes) => {
      this.notes = notes;
    })
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note).subscribe(() => {
      this.notes = this.notes.filter((e) => e.id !== note.id)
    })
  }

  addNote(note: Note) {
    this.notesService.addNote(note).subscribe((note) => {
      this.notes.push(note);
    })
  }

}
