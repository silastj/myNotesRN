interface Note {
  title: string;
  body: string;
}

export interface NotesState {
  list: Note[];
}

export interface AddNoteAction {
  type: 'ADD_NOTE';
  payload: Note;
}
