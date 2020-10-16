console.log("Project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('tel');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    console.log('name is blured');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name matched');
        name.classList.remove('is-invalid');
        validUser = true;
    } else {

        console.log('Your name not matched');
        name.classList.add('is-invalid');
        validUser = false;
    }
});

email.addEventListener('blur', () => {
    console.log('email is blured');
    // validate email here
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {

        console.log('Your email not matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blured');
    // validate phone here
    let regex = /^\+([0-9]){12}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    } else {

        console.log('Your phone not matched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }    
});