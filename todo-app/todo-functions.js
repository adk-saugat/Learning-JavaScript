const getStoredTodos = function () {
  const todosJSON = localStorage.getItem("todos")
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

const renderDesc = function (todos) {
  let totalIncomplete = 0

  todos.forEach(function (todo) {
    if (!todo.isComplete) {
      totalIncomplete += 1
    }
  })
  const todoDesc = document.createElement("h2")
  todoDesc.textContent = `Todos Left: ${totalIncomplete}`
  document.querySelector("#todo-content").appendChild(todoDesc)
}

const renderTodos = function (todos) {
  document.querySelector("#todo-content").innerHTML = ""
  renderDesc(todos)
  todos.forEach(function (todo) {
    const todoItem = document.createElement("h3")
    todoItem.textContent = `${todo.title}`
    document.querySelector("#todo-content").appendChild(todoItem)
  })
}
