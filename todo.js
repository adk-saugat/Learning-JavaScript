const todos = [{
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

const sortTodos = function (todos){
    todos.sort(function (a, b){
        if (!a.isComplete && b.isComplete){
            return -1
        } else if  (!b.isComplete && a.isComplete){
            return 1
        } else {
            return 0
        }
    })
}

// console.log(todosToBeCompleted(todos))
// deleteTodo('exercise')
// console.log(todos)
sortTodos(todos)
console.log(todos)





