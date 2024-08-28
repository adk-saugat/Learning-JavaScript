let todos = [];

todos.push("Do Assignments.");
todos.push("Clean Apartment.");

console.log("Todos:")
todos.forEach(function (items, index){
    console.log(`${index + 1}. ${items}`)
})



