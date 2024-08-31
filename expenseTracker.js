const account = {
    name: 'Saugat Adhikari',
    income: [],
    expenses : [],
    addIncome : function (description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },

    addExpense : function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalIncome = 0
        let totalExpense = 0

        this.income.forEach(function (income){
            totalIncome += income.amount
        })
        this.expenses.forEach(function (expense){
            totalExpense += expense.amount
        })
        return `${this.name} has balance $${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in expense.`;
    }
}

account.addExpense('Rent', 950)
account.addExpense('Subway', 6)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())


