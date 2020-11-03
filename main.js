const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();

	verifyInputs();
});

function verifyInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(usernameValue === '') {
		errorCase(username, 'Username cannot be blank');
	} else {
		successCase(username);
	}

	if(emailValue === '') {
		errorCase(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		errorCase(email, 'Not a valid email');
	} else {
		successCase(email);
	}

	if(passwordValue === '') {
		errorCase(password, 'Password cannot be blank');
	} else {
		successCase(password);
	}

	if(password2Value === '') {
		errorCase(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		errorCase(password2, 'Passwords does not match');
	} else{
		successCase(password2);
	}
}

function errorCase(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function successCase(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
