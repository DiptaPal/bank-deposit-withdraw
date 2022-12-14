//step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click',function(){
    //step-2: get the deposit amount from the deposit input box
    //For input field use .value to the value inside the input field
    const depositBox = document.getElementById('deposit-box');
    const newDepositAmoutString = depositBox.value;
    const newDepositAmout = parseFloat(newDepositAmoutString);

    const checkDeposit = onlyNumbers(newDepositAmoutString);

    //clear the deposit field
    depositBox.value = '';

    if(newDepositAmoutString.includes('.') === true){
        for (let i = 0; i < newDepositAmoutString.length; i++) {
            if(newDepositAmoutString[i] === '.'){
                decimalIndex = i;
            }
        }
    
        if(isNaN(parseFloat(newDepositAmoutString[decimalIndex+1])) === true){
            alert('Please provite valid input !!!');
            return;
        }
    }

    if(isNaN(newDepositAmout) || (newDepositAmout < 0) || (checkDeposit === false)){
        alert('Please provide a valid number');
        return;
    }
    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString  =  depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: add numbbers to set the deposit
    const currentDepositTotal = newDepositAmout + previousDepositTotal;
    depositTotal.innerText = currentDepositTotal;

    //step-5: get ballance current total
    const totalAmount = document.getElementById('total-amount');
    const previousTotalAmountString = totalAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    //Step-6: calcu;ate current total balance
    const totalMoney = previousTotalAmount + newDepositAmout;
    //set the total balance
    totalAmount.innerText = totalMoney;
});

function onlyNumbers(str) {
    return /^[0-9.]+$/.test(str);
}