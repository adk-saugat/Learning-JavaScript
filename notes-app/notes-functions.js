const renderNotes = function (notes) {

    notes.forEach(function (note) {
        const noteTitle = document.createElement('h2')
        const noteWrapper = document.querySelector('#noteWrapper')
        noteTitle.textContent = note.title

        noteWrapper.appendChild(noteTitle)
        document.querySelector('body').appendChild(noteWrapper)
    })
}