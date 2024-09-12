const renderNotes = function (notes) {
    notes.forEach(function (note) {
        const noteTitle = document.createElement('h2')
        noteTitle.textContent = note.title
        document.querySelector('body').appendChild(noteTitle)
    })
}