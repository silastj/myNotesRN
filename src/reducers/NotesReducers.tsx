interface Note {
  title: string;
  body: string;
}

interface NotesState {
  list: Note[];
}

interface AddNoteAction {
  type: 'ADD_NOTE';
  payload: Note;
}

type ActionTypes = AddNoteAction;

const initialState: NotesState  = {
  list: [
    {title: 'Primeira nota', body: 'Testando 1,2,3 ...'}
  ]
};

export default (state = initialState, action: ActionTypes) => {

  switch(action.type) {
    case 'ADD_NOTE':

    break;
  }
  return state
}