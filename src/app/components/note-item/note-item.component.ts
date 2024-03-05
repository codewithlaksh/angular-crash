import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/notes';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note;
  @Output() noteDelete: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(note: Note) {
    this.noteDelete.emit(note);
  }

}
