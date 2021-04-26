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
//Functions

//App Initialization
function appInit() {
    //Disable the send Btn on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    //Show the Spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide spinner then show the email image
    setTimeout(function() {
        //Hide the spinner
        spinner.style.display = 'none';

        //show the email image
        document.querySelector('#loaders').appendChild(sendEmailImg);

        //after 5 seconds hide the emailimage and reset the form
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailImg.remove();
            sendBtn.disabled = true;
        }, 5000);

    }, 3000 );
}
