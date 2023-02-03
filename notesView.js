class NotesView{
  constructor(model, client){
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button');

    this.addButtonEl.addEventListener('click', () => {
      const content = document.querySelector('#note-input').value;
      this.client.createNote(content)
      this.displayNotesFromApi();
      document.getElementById("note-input").value = "";
    })
  }

  displayNotes(){
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    })
    const notes = this.model.getNotes()
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  displayNotesFromApi(){
    this.client.loadNotes()
    .then((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    })
  }
}

module.exports = NotesView;