//Variables
const send8tn = document.getElementById('send8tn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementByI('message');


//Event Listeners

eventlisteners();

function eventlisteners() {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate the forms
    email.addEventListener('blur',validateField);
    subject.addEventListener('blur',validateField);
    message.addEventListener('blur',validateField);
}

//Functions

//App Initialization
function appInit() {
    //disable the send button on load
    send8tn.disable = true;
}


// validate the field
function validateField(){
let errors;

//validate the Lenght of the field
validateLenght(this);

//validate the email
if(this.type === 'email'){
    validateEmail(this);
}

}
//validate the lenght of the fields 
function validateLenght(field){
    if(field.value.lenght > 0 ){
        field.style.boarderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.boarderBottomColor = 'red';
        field.classList.add('error');
    }

}
//validate email (checks for @ in the value )

function validateEmail(field){
    let emailText = field.value;
    //check if the emailtext conatins the @ sign
    if(emailText.index('@') !==-1){
        field.style.boarderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.boarderBottomColor = 'red';
        field.classList.add('error');
    }

    }


