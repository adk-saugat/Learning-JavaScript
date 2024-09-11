const getStoredTodos = function () {
  const todosJSON = localStorage.getItem("todos")
  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

const saveTodo = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const deleteTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })

  if (todo !== undefined) {
    todo.isComplete = !todo.isComplete
  }
}

const generateTodoDOM = function (todo) {
  const itemContainer = document.createElement('div')
  const todoCheckBox = document.createElement('input')
  const todoItem = document.createElement('span')
  const deleteBtn = document.createElement('button')

  todoCheckBox.setAttribute('type', 'checkbox')
  itemContainer.appendChild(todoCheckBox)
  todoCheckBox.checked = todo.isComplete
  todoCheckBox.addEventListener('change', function () {
    toggleTodo(todo.id)
    saveTodo(todos)
    renderTodos(todos)
  })

  todoItem.textContent = todo.title
  itemContainer.appendChild(todoItem)

  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener('click', function () {
    deleteTodo(todo.id)
    saveTodo(todos)
    renderTodos(todos)
  })

  itemContainer.appendChild(deleteBtn)

  return itemContainer
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
    const todoItem = generateTodoDOM(todo)
    document.querySelector("#todo-content").appendChild(todoItem)
  })
}
