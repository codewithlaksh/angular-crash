import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/notes';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  body: string;
  @Output() noteAdd: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const note = {
      id: crypto.randomUUID(),
      body: this.body,
      date: new Date()
    }
    this.noteAdd.emit(note);
    this.body = "";
  }

}
