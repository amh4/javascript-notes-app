/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel= require('./notesModel')
 
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
   
 });