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
 
     expect(document.querySelectorAll('div.note').length).toBe(2);
   });
 });