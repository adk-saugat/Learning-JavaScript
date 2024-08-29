let todos = [{
    title: 'exercise',
    isComplete : false
}, {
    title: 'do laundry',
    isComplete : true
}]


function deleteTodo(todoTitle){
    const index = todos.findIndex( function (todo, index){
        return todoTitle.toLowerCase() === todo.title.toLowerCase()
    })
    todos.splice(index, 1)
}

console.log(todos)
deleteTodo('exercise')
console.log(todos)




