class NotesModel{
  constructor(){
    this.notes = []
  }

  addNote(item){
    return this.notes.push(item)
  }

  getNotes(){
    return this.notes
  }

  reset(){
    this.notes = []
  }

  setNotes(notes){
    this.notes = notes
  }
}

module.exports = NotesModel;