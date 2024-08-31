const account = {
    name: 'Saugat Adhikari',
    expenses : [],
    addExpense : function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let total = 0
        this.expenses.forEach(function (expense){
            total += expense.amount
        })
        return `${this.name} has expense of $${total}.`;
    }
}

// account.addExpense('Rent', 950)
// account.addExpense('Subway', 6)
// account.addExpense('Coffee', 2)
// console.log(account.getAccountSummary())
console.log(account)

