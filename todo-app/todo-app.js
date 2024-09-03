let todos = [{
    title: 'Code',
    isComplete: true
}]

const renderTodos = function (){
    let totalIncomplete = 0
    
    document.querySelector('#todo-content').innerHTML = ''
    todos.forEach(function (todo, index){
        if (!todo.isComplete){
            totalIncomplete += 1
        }
        const todoItem = document.createElement('h3')

        todoItem.textContent = `${index + 1}. ${todo.title}`
        document.querySelector('#todo-content').appendChild(todoItem)
    })
    
    const todoDesc = document.createElement('h2')
    todoDesc.textContent = `Todos Left: ${totalIncomplete}`
    document.querySelector('#todo-content').appendChild(todoDesc)
    //document.querySelector('#todo-description').textContent = 
}



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


