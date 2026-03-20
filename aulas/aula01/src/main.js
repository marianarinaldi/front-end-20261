import './style.css'

const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  const matriculaInput = document.querySelector('#matricula');
  const matriculaError = document.querySelector('#matricula-error');

  const passwordInput = document.querySelector('#password');
  const passwordError = document.querySelector('#password-error');

  const matricula = matriculaInput.value;
  const password = passwordInput.value;

  matriculaError.textContent = '';
  passwordError.textContent = '';

  if(matricula == '') {
    matriculaError.textContent = 'Matrícula é obrigatória.';
    return;
  }

  if(parseInt(matricula) <= 0){
    matriculaError.textContent = 'Matrícula deve ser um número positivo.';
    return;
  }

  if(password == '') {
    passwordError.textContent = 'Senha é obrigatória.';
    return;
  }

  if(password.length < 8) {
    passwordError.textContent = 'Senha deve conter no mínimo 8 caracteres.';
    return;
  }
})