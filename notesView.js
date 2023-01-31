class NotesView{
  constructor(model){
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button');


    this.addButtonEl.addEventListener('click', () => {
      const content = document.querySelector('#note-input').value;
      this.model.addNote(content)
      this.displayNotes();
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
}

module.exports = NotesView;