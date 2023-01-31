const NotesModel = require('./notesModel')

describe('Notes App', () => {
	it('Adds a note to the app', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk')
    expect(notes.getNotes()).toEqual(['Buy Milk']);
  });

  it('Adds multiple note to the app', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk')
    notes.addNote('Buy Eggs')
    expect(notes.getNotes()).toEqual(['Buy Milk', 'Buy Eggs']);
  });

  it('Resets the notes', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk')
    notes.addNote('Buy Eggs')
    notes.reset()
    expect(notes.getNotes().length).toEqual(0);
  });
});