const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('Notes Client class', () => {
  it('calls fetch and loads notes data', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      note: "Test Note",
    }));
  
    client.loadNotes().then((data) => {
      expect(data.note).toEqual("Test Note")
      done();
    })
  });

  it('calls fetch and loads notes data', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      note: "Test Note",
      note1: "Test Note2",
    }));
  
    client.loadNotes().then((data) => {
      expect(Object.keys(data).length).toEqual(2)
      done();
    })
  });

  it('Posts a new note', async () => {
    const client = new NotesClient();

    const data = { note: 'POST TEST NOTE'}
    const responseData = { success: 'Much Success'}

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(responseData),
      ok: true,
    }))

    const response = await fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const json = await response.json();
    expect(json).toEqual(responseData);

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:3000/notes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
  })
});
