class NotesClient {
  loadNotes(callback){
    fetch('/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
  }
}

module.exports = NotesClient;