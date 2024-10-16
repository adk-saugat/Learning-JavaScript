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

document.querySelector('#noteFilter').addEventListener('input', function (e) {
    console.log(e.target.value)
})

