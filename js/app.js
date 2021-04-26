//variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      message = document.getElementById('message'),
      subject =document.getElementById('subject'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');

//Event Listeners

eventListeners();

function eventListeners() {
    //App init
    document.addEventListener('DOMContentLoaded',appInit);

    //Validate the form
    email.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);

    //Send email & reset Btn
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}
