/**
 * @jest-environment jsdom
 */ 

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel= require('./notesModel');
 
 jest.mock('./notesClient')
 
 describe('Page view', () => {
   it('displays the added note', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NotesModel();
     const view = new NotesView(model);

     model.addNote('Buy Milk')
     model.addNote('Buy Eggs')

     view.displayNotes();
 
     expect(document.querySelectorAll('.note').length).toEqual(2);
   });

   it('displays the added note', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NotesModel();
     const view = new NotesView(model);

     const inputEl = document.querySelector('#note-input');
     inputEl.value = 'Test Value 1'

     const buttonEl = document.querySelector('#add-note-button')
     buttonEl.click();

     expect(document.querySelector('.note').innerText).toEqual('Test Value 1');
   });

   it('displays the added notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('Buy Milk')
    model.addNote('Buy Eggs')

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  // it("displayNotesFromApi loads notes from server and displays the received notes", (done) => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const mockClient = {
  //     loadNotes: jest.fn(),
  //   };
  //   const model = new NotesModel();
  //   const view = new NotesView(model, mockClient);

  //   mockClient.loadNotes.mockImplementation(() => {
  //   return(["Feed lawn", "Mow dog"]);
  //   });

  //   view.displayNotesFromApi().then(() => {
  //   const notes = document.querySelectorAll("div.note");
  //   expect(notes.length).toBe(2);
  //   expect(notes[0].innerText).toBe("Feed lawn");
  //   done();
  // });
  // })
})