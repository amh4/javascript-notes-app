class NotesClient {
  
  loadNotes(){
    return fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {return data})
  }
  
  createNote(data) {
    return fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: data}),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }
}


module.exports = NotesClient;