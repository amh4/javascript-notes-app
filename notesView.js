class NotesView{
  constructor(model){
    // Inset Model into View so we can access the methods
    this.model = model;
    // Get the element we want from the HTML and set it to a var
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes(){
    // Get all the notes from the model class and assign to var
    const notes = this.model.getNotes()

    // Iterate through each note
    notes.forEach(note => {
      // Create a new div for each note
      const noteEl = document.createElement('div');
      // Set content to be the note
      noteEl.textContent = note;
      // Set all to the same class name
      noteEl.className = 'note';
      // Append to the main HTML element
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;