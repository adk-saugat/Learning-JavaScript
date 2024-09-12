const notes = [{
    title: 'note1',
    description: 'Code'
}]

renderNotes(notes)

document.querySelector('#noteInputField').addEventListener('submit', function (e) {
    e.preventDefault()
    notes.push({
        title: e.target.elements.noteInputBox.value,
        description: 'Null'
    })
    renderNotes(notes)
    // console.log(e.target.elements.noteInputBox.value)
})

