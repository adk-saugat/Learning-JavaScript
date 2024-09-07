let todos = getStoredTodos()

renderDesc(todos)
renderTodos(todos)

document.querySelector("#form-box").addEventListener("submit", function (e) {
  e.preventDefault()

  todos.push({
    title: e.target.elements.todoInputBox.value,
    isComplete: false,
  })
  localStorage.setItem("todos", JSON.stringify(todos))
  renderTodos(todos)
  e.target.elements.todoInputBox.value = ""
})
