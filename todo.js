let todos = [{
    title: 'exercise',
    isComplete : false
}, {
    title: 'do laundry',
    isComplete : true
}, {
    title: 'cook food',
    isComplete : false
}]

function todosToBeCompleted(todos){
    return todos.filter(function (todo, index) {
        return !todo.isComplete
    })
}
function deleteTodo(todoTitle){
    const index = todos.findIndex( function (todo, index){
        return todoTitle.toLowerCase() === todo.title.toLowerCase()
    })
    todos.splice(index, 1)
}

console.log(todosToBeCompleted(todos))
//deleteTodo('exercise')
//console.log(todos)




