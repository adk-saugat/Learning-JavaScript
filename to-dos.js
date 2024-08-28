let todos = []

todos.push("Do Assignments.")
todos.push("Clean Apartment.")
todos.push("Do Laundry.")

todos.pop("Do Laundry.")
console.log("Todos:")
todos.forEach(function (items, index){
    console.log(`${index + 1}. ${items}`)
})




