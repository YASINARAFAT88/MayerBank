//Deposit
let depositInput = document.getElementById('deposit-input')
let depositTotal = document.getElementById('deposit-total')
//Withdraw
let withdrawInput = document.getElementById('withdraw-input')
let withdrawTotal = document.getElementById('withdraw-total')
//Balance Update
let balanceTotal = document.getElementById('balance-total')

function addMoney(currentBalance, newBalance) {
    return Number(currentBalance) + Number(newBalance);
}
function getMoney(currentBalance,newBalance) {
    return Number(currentBalance) - Number(newBalance);
}
function deposit(){
    const totalBalance = addMoney(depositTotal.innerText,depositInput.value)
    depositTotal.innerText = totalBalance;
    const balanceAmount = addMoney(balanceTotal.innerText,depositInput.value)
    balanceTotal.innerText = balanceAmount;
    //Clear Empty String
    depositInput.value='';
}
function withdrawButton() {
    const totalWithdraw = addMoney(withdrawTotal.innerText,withdrawInput.value)
    withdrawTotal.innerText = totalWithdraw;
    //update Balance after withdraw
    const totalBalance = getMoney(balanceTotal.innerText,withdrawInput.value);
    balanceTotal.innerText = totalBalance;
    //clear 
    withdrawInput.value='';
}