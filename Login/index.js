const form = document.querySelector('form');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  validInput()
   
});
function validInput() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    let isValid = true;
  
    if (emailValue === '' && passwordValue === '') {
      document.getElementById('emailHelp').innerText = "Enter a proper email id";
      document.getElementById('emailHelp2').innerText = "Enter a proper password";
      emailInput.classList.add('invalid-input');
      passwordInput.classList.add('invalid-input');

      passwordInput.focus();
      emailInput.focus();
      isValid = false;
    } else if (emailValue === '') {
      document.getElementById('emailHelp').innerText = "Enter a proper email id";
      emailInput.classList.add('invalid-input');
      emailInput.focus();
      isValid = false;
    } else if (passwordValue === '') {
      document.getElementById('emailHelp2').innerText = "Enter a proper password";
      passwordInput.classList.add('invalid-input');
      passwordInput.focus();
      isValid = false;
    } else if (!emailValue.includes('@')) {
      document.getElementById('emailHelp').innerText = "Email id does not have @ in it";
      emailInput.classList.add('invalid-input');
      emailInput.focus();
      isValid = false;
    } else if (!emailValue.includes('.')) {
      document.getElementById('emailHelp').innerText = "Email id does not have domain name";
      emailInput.classList.add('invalid-input');
      emailInput.focus();
      isValid = false;
    } else if (passwordValue.length < 8) {
      document.getElementById('emailHelp2').innerText = "Password must be at least 8 characters long";
      passwordInput.classList.add('invalid-input');

      passwordInput.focus();
      isValid = false;
    } else if (!passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)) {
      document.getElementById('emailHelp2').innerText = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      passwordInput.classList.add('invalid-input');

      passwordInput.focus();
      isValid = false;
    }else{
        document.getElementById('emailHelp2').innerText = "";
        document.getElementById('emailHelp').innerText = "";
        emailInput.classList.remove('invalid-input');
        passwordInput.classList.remove('invalid-input');

    }

  
    return isValid;
  }
  
  