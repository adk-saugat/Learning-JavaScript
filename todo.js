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

<<<<<<< HEAD
console.log(todosToBeCompleted(todos))
//deleteTodo('exercise')
//console.log(todos)
=======
console.log(todos)
deleteTodo('exercise')
console.log(todos)
>>>>>>> 36f0bab9b2f63346be3bd4df5ac19ec07e7da293




