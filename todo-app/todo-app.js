let todos = getStoredTodos()

renderDesc(todos)
renderTodos(todos)

document.querySelector("#form-box").addEventListener("submit", function (e) {
  e.preventDefault()

  todos.push({
    id: crypto.randomUUID(),
    title: e.target.elements.todoInputBox.value,
    isComplete: false,
  })

  saveTodo(todos)
  renderTodos(todos)
  e.target.elements.todoInputBox.value = ""
})
