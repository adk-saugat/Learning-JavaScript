const notes = getStoredNotes()
renderNotes(notes)

document.querySelector('#noteInputField').addEventListener('submit', function (e) {
    e.preventDefault()
    notes.push({
        title: e.target.elements.noteInputBox.value,
        description: 'Null'
    })
    document.querySelector('#noteWrapper').innerHTML = ''
    saveNotes(notes)
    renderNotes(notes)
})

