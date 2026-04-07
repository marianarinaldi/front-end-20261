import './style.css'

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');

  const passwordInput = document.querySelector('#password');
  const passwordError = document.querySelector('#password-error');

  const email = emailInput.value;
  const password = passwordInput.value;

  emailError.textContent = '';
  passwordError.textContent = '';

  if(email == '') {
    emailError.textContent = 'O campo de email é obrigatório.';
    return;
  }

  if(password == '') {
    passwordError.textContent = 'O campo de senha é obrigatório.';
    return;
  }

  if(password.length < 8) {
    passwordError.textContent = 'Senha deve conter no mínimo 8 caracteres.';
    return;
  }

  window.location.href = '/index.html';
})