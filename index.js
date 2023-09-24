// formulaire pour le budget
const budgetAmount = document.getElementById("budget-amount");
const balanceAmount = document.getElementById("balance-amount");

const budgetInput = document.getElementById("budget-input");
const budgetForm = document.getElementById("budget-form");

function getBudgetAmount(amount) {
    if (!amount) {
        budgetInput.style.border = "1px solid #b80c09";
        budgetInput.placeholder = "input can not be empty";
        budgetInput.style.color = "#b80c09";
        setTimeout(() => {
            budgetInput.style.color = "#495057";
            budgetInput.style.border = "1px solid gray";
        }, 3000);
    } else {
        budgetAmount.innerText = amount;
        balanceAmount.innerText = amount;
        budgetInput.value = "";
    }
}

budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(budgetInput.value);
})


//formulaire pour le nom et le montant de la depense
const expForm = document.getElementById("expense-form");
const expInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");
const expAmount = document.getElementById("expense-amount");
console.log(expAmount);

let id = 0;
let details = [];

function addExpenses(name, number) {
    if (!name.length || !number.length) {
        expInput.style.border = "1px solid #b80c09";
        expInput.placeholder = "input can not be empty";
        expInput.style.color = "#b80c09";

        amountInput.style.border = "1px solid #b80c09";
        amountInput.placeholder = "input can not be empty";
        amountInput.style.color = "#b80c09";

        setTimeout(() => {
            expInput.style.color = "#495057";
            expInput.style.border = "1px solid gray";
            expInput.placeholder = "input can not be empty";

            amountInput.placeholder = "input can not be empty";
            amountInput.style.border = "1px solid gray";
            amountInput.style.color = "#495057";
        }, 3000);
    } else {
        // const userExp = {
        //     id: id,
        //     name: name,
        //     number: parseInt(number),
        // };
        // details.push(userExp);
        // displayExp(details);
        // id++;
        expAmount.innerText = number;
        expInput.value = "";
        amountInput.value = "";
    }
}

expForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addExpenses(expInput.value, amountInput.value);
});













// class UI {
//     constructor() {
//         this.budgetFeedback = document.querySelector('.budget-feedback');
//         this.expenseFeedback = document.querySelector('.expense-feedback');
//         this.budgetForm = document.getElementById("budget-form");
//         this.budgetInput = document.getElementById("budget-input");
//         this.budgetAmount = document.getElementById("budget-amount");
//         this.expenseAmount = document.getElementById("expense-amount");
//         this.balance = document.getElementById("balance");
//         this.balanceAmount = document.getElementById("balance-amount");
//         this.expenseForm = document.getElementById("expense-form");
//         this.expenseInput = document.getElementById("expense-input");
//         this.amountInput = document.getElementById("amount-input");
//         this.expenseList = document.getElementById("expense-list");
//         this.itemList = [];
//         this.itemID = 0;
//     }
//     //submit budget method
//     submitBudgetForm() {
//         const value = this.budgetInput.value;
//         if (value === "" || value < 0) {
//             this.budgetFeedback.classList.add('showItem');
//             this.budgetFeedback.innerHTML = `<p>value cannot be empty or negative</p>`;
//             const self = this;
//             setTimeout(function() {
//                 self.budgetFeedback.classList.remove('showItem');
//             }, 4000);
//         } else {
//             this.budgetAmount.textContent = value;
//             this.budgetInput.value = "";
//             this.showBalance();
//         }
//     }
//     //show balance

// }

// function eventListenters() {
//     const budgetForm = document.getElementById("budget-form");
//     const expenseForm = document.getElementById("expense-form");
//     const expenseList = document.getElementById("expense-list");

//     // new instance of UI class
//     const ui = new UI();

//     //budget form submit
//     budgetForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//     })
//     //expense form submit
//     expenseForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//     })
//     //expense click
//     expenseList.addEventListener('submit', function() {
        
//     })

// }