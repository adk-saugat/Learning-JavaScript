let todos = [{
    title: 'Code',
    isComplete: false
}]



const renderDesc = function (){
    let totalIncomplete = 0

    todos.forEach(function (todo){
        if (!todo.isComplete){
            totalIncomplete += 1
        }
    })
    const todoDesc = document.createElement('h2')
    todoDesc.textContent = `Todos Left: ${totalIncomplete}`
    document.querySelector('#todo-content').appendChild(todoDesc)
}

const renderTodos = function (){
    
    
    document.querySelector('#todo-content').innerHTML = ''
    renderDesc()
    todos.forEach(function (todo){
        const todoItem = document.createElement('h3')
        // const todoCheckBox = document.createElement('input')
        // todoCheckBox.setAttribute('type', 'checkbox')

        todoItem.textContent = `${todo.title}`
        //document.querySelector('#todo-content').appendChild(todo)
        document.querySelector('#todo-content').appendChild(todoItem)


    })
}

renderDesc()
renderTodos()

document.querySelector('#form-box').addEventListener('submit', function (e){
    e.preventDefault()
    
    todos.push({
        title: e.target.elements.todoInputBox.value,
        isComplete: false
    })
    renderTodos()
    e.target.elements.todoInputBox.value = '' 
})


