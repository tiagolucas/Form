const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '') {
        setErrorFor(username, 'Username is required.');
    } else {
        setSuccessFor(username);
    };

    if (emailValue === '') {
        setErrorFor(email, 'Email is required.')
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email.')
    } else {
        setSuccessFor(email);
    };

    if (passwordValue === '') {
        setErrorFor(password, 'Password is required.')
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'Password must be at least 7 characters long.')
    } else {
        setSuccessFor(password);
    };

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'Confirmation password is required.')
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, 'The passwords are different. Please check.')
    } else {
        setSuccessFor(passwordConfirmation);
    };

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === 'form-control success');
    });

    if (formIsValid) {
        document.getElementById('result').innerHTML = `The form is 100% valid.`
    } else {
        document.getElementById('result').innerHTML = `To incorrect fields.`
    };
};

function setSuccessFor (input) {
    const formControl = input.parentElement;

    /* Add success class */
    formControl.className = 'form-control success';
};

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    /* add message and class error */
    small.innerText = message;

    formControl.className = 'form-control error';
};

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};