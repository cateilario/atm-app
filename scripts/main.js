document.addEventListener("DOMContentLoaded", () =>{

const withdrawAmount = document.getElementById("withdraw");
const depositAmount = document.getElementById("deposit");
const actionInput = document.getElementById("action");

let amount = parseFloat(document.getElementById("amount").value);
let initialBalance = parseFloat(document.getElementById("balance").value);

initialBalance = 1000;
amount = '';

withdrawAmount.addEventListener("click", () =>{
    if (isNaN(amount) || amount <=0 || amount === '' || amount > initialBalance){
        actionInput.textContent = `Invalid transaction!`
        return;
    } else {
        amount = initialBalance - amount;
        actionInput.textContent = ` Withdrawal : ${currentBalance} `;
        initialBalance.textContent = `Balance: ${amount}`;
    }
});

depositAmount.addEventListener("click", (amount) =>{
    if (isNaN(amount) || amount <= 0 || amount === ''){
        actionInput.textContent = `Invalid transaction!`
    } else{
        currentBalance = initialBalance + amount;
        actionInput.textContent = ` `
    }
});

updateBalance.addEventListener("click", () =>{


});

});