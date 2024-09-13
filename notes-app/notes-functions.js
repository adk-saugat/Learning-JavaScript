const getStoredNotes = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}
const saveNotes = function (notes) {
    let notesJSON = JSON.stringify(notes)
    localStorage.setItem('notes', notesJSON)
}

const renderNotes = function (notes) {

    notes.forEach(function (note) {
        const noteTitle = document.createElement('h2')
        const noteWrapper = document.querySelector('#noteWrapper')
        noteTitle.textContent = note.title

        noteWrapper.appendChild(noteTitle)
        document.querySelector('body').appendChild(noteWrapper)
    })
}