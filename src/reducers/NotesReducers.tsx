interface Note {
  title: string;
  body: string;
  key?: number
}

interface NotesState {
  list: Note[];
}

interface AddNoteAction {
  type: 'ADD_NOTE' | 'EDIT_NOTE'| 'DEL_NOTE';
  payload: Note;
  key?: number
}

type ActionTypes = AddNoteAction;

const initialState: NotesState = {
  list: [
    { title: 'Primeira nota', body: 'Testando 1,2,3 ...' }
  ]
};

export default (state = initialState, action: ActionTypes) => {
  let newList = [...state.list]

  switch (action.type) {
    case 'ADD_NOTE':
      newList.push({
        title: action.payload.title,
        body: action.payload.body
      })
      break;

    case 'EDIT_NOTE':
      if (newList[action.payload?.key]) {
        newList[action.payload.key] = {
          title: action.payload.title,
          body: action.payload.body
        }
      }
    case 'DEL_NOTE':
      newList = newList.filter((item, index) => index != action.payload.key)
  }
  return { ...state, list: newList }
}