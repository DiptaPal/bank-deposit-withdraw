//step-1: add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click',function(){
    //step-2: get the email address inside the email input field
    const emailBox = document.getElementById('email-box');
    const userEmail = emailBox.value;

    //step-3: get the email address inside the email input field
        //3.a: set id on the html element
        //3.b: set the element
        //3.c: get the value from element
    const passwordBox = document.getElementById('password-box');
    const userPassword = passwordBox.value;
    
    //DO NOT VERIFY email password on the client side
    //step-4: verify email and password
    if(userEmail === 'ourbank@gmail.com' && userPassword === 'secret'){
        window.location.href='./bank.html'
    }
    else{
        console.log("Invalid user!!! Please enter the valid username and password");
    }
});