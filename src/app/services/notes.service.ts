import { Injectable } from '@angular/core';
import { Note } from 'src/notes';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiURL = "http://localhost:5000/notes";

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    // const notes = of([]);
    return this.http.get<Note[]>(this.apiURL);
  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.apiURL}/${note.id}`;
    return this.http.delete<Note>(url);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiURL, note, httpOptions);
  }
}
