const currentBalanceElement = document.getElementById("current-balance");
const IncomeBalanceElement = document.getElementById("income-balance");
const ExpenseBalanceElement = document.getElementById("expense-balance");
const entryNameInput = document.getElementById("entry-name");
const entryAmountInput = document.getElementById("entry-amount");
const entryTypeInput = document.getElementById("entry-type");
const entrycategoryInput = document.getElementById("entry-category");
const addButton = document.querySelector(".Add button");
const entriesContainer = document.getElementById("entries-container");


let Incomebalance = 0;
let Expensebalance = 0;
let currentBalance = 0;

addButton.addEventListener("click", addentry);

function addentry(){
    const name = entryNameInput.value;
    const amount = parseFloat(entryAmountInput.value);
    const type = entryTypeInput.value;
    const type1 = entrycategoryInput.value;

    if (name===""|| amount<=0 || isNaN(amount) || type === "" || type1 === "") {
        alert("Please fill in all fields with valid values.");
        return;
    }
    if (type==="Expense") {
        Expensebalance += amount;
        
    }
    else {
        Incomebalance += amount;
        
    }
    currentBalance = Incomebalance - Expensebalance;
    currentBalanceElement.textContent = `$${currentBalance.toFixed(2)}`;    
    IncomeBalanceElement.textContent = `$${Incomebalance.toFixed(2)}`;
    ExpenseBalanceElement.textContent = `$${Expensebalance.toFixed(2)}`;

    

    const newEntry = document.createElement("div");
    newEntry.className = "entry";
    let sign = "";
    let color = "";

    if (type === "Income") {
        sign = "+";
        color = "green";
    } else {
        sign = "-";
        color = "red";
    }   
    newEntry.innerHTML = `
    <h5>${name}</h5>
    <p>${type1}</p>
    <h4 class="${color}">
        ${sign}$${amount.toFixed(2)}
    </h4>
`;
    entriesContainer.prepend(newEntry);

    entryNameInput.value = "";
    entryAmountInput.value = "";
       

    
    
}