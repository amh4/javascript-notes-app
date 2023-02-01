const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('Notes Client class', () => {
  it('calls fetch and loads notes data', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
      note: "Test Note",
    }));
    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.note).toBe("Test Note");
      done();
    });
  });
});