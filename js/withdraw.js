//step-1: add event listener to the withdraw button
document.getElementById('withdrow-btn').addEventListener('click',function(){
    //step-2: get the withdraw amount from the withdraw input box
    //For input field use .value to the value inside the input field
    const withdrawBox = document.getElementById('withdraw-box');
    const newWithdrawAmoutString = withdrawBox.value;
    const newWithdrawAmout = parseFloat(newWithdrawAmoutString);

    //clear the withdraw field
    withdrawBox.value = '';

    if(isNaN(newWithdrawAmout) || (newWithdrawAmout < 0)){
        alert('Please provide a valid number');
        return;
    }

    //step-3: get the current withdraw total
    //for non-input(element other than input, textarea) use innerText to get the text
    const withdrawTotal = document.getElementById('withdrow-total');
    const previousWithdrawTotalString  =  withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5: get ballance current total
    const totalAmount = document.getElementById('total-amount');
    const previousTotalAmountString = totalAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);

    if(newWithdrawAmout > previousTotalAmount){
        alert('Not sufficient Balance!!!');
        return;
    }

    //step-4: add numbbers to set the withdraw
    const currentWithdrawTotal = newWithdrawAmout + previousWithdrawTotal;
    withdrawTotal.innerText = currentWithdrawTotal;

    //Step-6: calcuate current total balance
    const totalMoney = previousTotalAmount - newWithdrawAmout;
    //set the total balance
    totalAmount.innerText = totalMoney;

    
});