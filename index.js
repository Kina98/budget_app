
// formulaire pour le budget
const message = document.querySelector(".message");
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
    //sauvegarder le budget dans le stockage local
    setBudgetToLocalStorage(amount)
}

budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(budgetInput.value);
    message.style.display = "block";
    setTimeout(function() {
      message.style.display = "none";
    }, 2000);
})


//formulaire pour le nom et le montant de la depense
const message2 = document.querySelector(".message2");
const expForm = document.getElementById("expense-form");
const expAmount = document.getElementById("expense-amount");
const displayExpenses = document.getElementById("displayExpenses");
const expValue = document.getElementById("expValue");

let expInput = document.getElementById("expense-input");
let amountInput = document.getElementById("amount-input");
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
        const userExp = {
            id: id,
            name: name,
            number: parseInt(number),
        };
        details.push(userExp);
        displayExp(details);
        id++;
        // expAmount.innerText = number;
        // balanceAmount.innerText = budgetAmount.innerText - expAmount.innerText;
        expInput.value = "";
        amountInput.value = "";
    }
    //Sauvegarder les depenses dans le stockage local
    setExpensesToLocalStorage(details)
}

expForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addExpenses(expInput.value, amountInput.value);
    message2.style.display = "block";
    setTimeout(function() {
      message2.style.display = "none";
    }, 2000);

});


function displayExp(details) {
    expValue.innerHTML = null;
    for (i = 0; i < details.length; i++) {
      expValue.innerHTML += `
      <div class="expValue" id="${details[i].id}">
        <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
        <div id="expValueAmount" class="exp"><p>${details[i].number} <span>F </span></p></div>
        <div id="edite_delete">
          <p>
            <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <i class="fa-solid fa-pen-to-square" id="edit"></i></button> 
            <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><i class="fa-solid fa-trash"></i></button>
          </p>
        </div>
      </div>
      <hr />
    `;
    }
    calcExpenses();
    displayExpenses.style.display = "block";
  }

  function calcExpenses() {
    let totalExp = 0;
    for (i = 0; i < details.length; i++) {
      totalExp = details[i].number + totalExp;
    }
    expAmount.innerText = totalExp;
    updateBalance();
  }

  function updateBalance() {
    balanceAmount.innerText =
      parseInt(budgetAmount.innerText) - parseInt(expAmount.innerText);
  }

  // Edit a form

const editForm = document.getElementById("editForm");
const saveEdit = document.getElementById("saveEdit");
const editExpValue = document.getElementById("editExpValue");
const editExpNumber = document.getElementById("editExpNumber");
  function editExpDetails(id) {
    expForm.style.display = "none";
    budgetForm.style.display = "none";
    editForm.style.display = "block";
    details.findIndex((item) => {
      if (item.id === id) {
        editExpName.value = item.name;
        editExpNumber.value = item.number;
        saveEdit.children[2].id = item.id;
        modal.style.display = "block";
      }
    });
  }

function getExpValue(editExpName, editExpNumber, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].name = editExpName;
  details[edited].number = parseInt(editExpNumber);
  displayExp(details);
}

saveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getExpValue(editExpName.value, editExpNumber.value, saveEdit.children[2].id);
});

  // Suppression a expense
  function delExpenseDetails(id) {
    let index = details.findIndex((item) => item.id === id);
    details.splice(index, 1);
    displayExp(details);
  }


  // local storage
const budgetKey = "budget";
const expensesKey = "expenses";

function getBudgetFromLocalStorage() {
  const budget = localStorage.getItem(budgetKey);
  if (budget) {
    return parseInt(budget);
  } else {
    return 0;
  }
}

function setBudgetToLocalStorage(budget) {
  localStorage.setItem(budgetKey, budget);
}

function getExpensesFromLocalStorage() {
  const expenses = localStorage.getItem(expensesKey);
  if (expenses) {
    return JSON.parse(expenses);
  } else {
    return [];
  }
}

function setExpensesToLocalStorage(expenses) {
  localStorage.setItem(expensesKey, JSON.stringify(expenses));
}

  



  //section history and chart
  document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            display:false,
            beginAtZero: true
          },
          x:{
            display:false
          }
        }
      }
    });
  });












