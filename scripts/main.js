/**
 * @author Caterina Ilario
 * @GitHub https://github.com/cateilario/atm-app.git
 */

document.addEventListener("DOMContentLoaded", () =>{

const withdrawAmount = document.getElementById("withdraw");
const depositAmount = document.getElementById("deposit");
const actionInput = document.getElementById("action");
const amountInput = document.getElementById("amount");
let balance = document.getElementById("balance");

const initialBalance = 1000;
let currentBalance = initialBalance;

withdrawAmount.addEventListener("click", () =>{
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <=0 || amount === '' || amount > currentBalance){
        actionInput.textContent = `Invalid transaction!`
        return;
    } else {
        currentBalance = currentBalance - amount;
        actionInput.textContent = ` Withdrawal : ${amount} `;
        //updateBalance();
        balance.textContent = `Balance: ${currentBalance}€`;
    }
}); 

depositAmount.addEventListener("click", () =>{
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0 || amount === ''){
        actionInput.textContent = `Invalid transaction!`
    } else {
        currentBalance += amount;
        actionInput.textContent = ` Deposit: ${amount} `
        //updateBalance();
        balance.textContent = `Balance: ${currentBalance}€`
    }
});

//Se puede tb actualizar el balance desde otro método y llamarlo:
updateBalance.addEventListener("click", () =>{
    balance.textContent = `Balance: ${currentBalance}`

});

});