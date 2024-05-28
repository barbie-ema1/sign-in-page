const form = document.getElementById ('form');
const submitbtn = document.querySelector(".submitbtn")
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorAlert = document.querySelectorAll(".error_");
const errorText = document.querySelectorAll(".errormessage");



// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  

  // Check first name
  if (fName === " ") {
    firstName.classList.add('error');
    errorAlert[0].classList.remove("hide")
    errorText[0].classList.remove("hide")
    
  } else {
    firstName.classList.remove('error');
    errorAlert[0].classList.remove("hide")
    errorText[0].classList.remove("hide")
  }
  // Check last name

  if (lName === " ") {
    lastName.classList.add('error');
    errorAlert[1].classList.remove("hide")
    errorText[1].classList.remove("hide")
  } else {
    lastName.classList.remove('error');
    errorAlert[1].classList.remove("hide")
    errorText[1].classList.remove("hide")
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === " ") {
    email.classList.add('error');
    errorAlert[2].classList.remove("hide")
    errorText[2].classList.remove("hide")
  } else {
    email.classList.remove('error');
    errorAlert[2].classList.remove("hide")
    errorText[2].classList.remove("hide")
  }

  // Check password

  if (passwordVal === " ") {
    password.classList.add('error');
    errorAlert[3].classList.remove("hide")
    errorText[3].classList.remove("hide")
  } else {
    password.classList.remove('error');
    errorAlert[3].classList.remove("hide")
    errorText[3].classList.remove("hide")
  }
})


//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


// Password visibility

const togglePassword =
  document.querySelector('#togglePassword');
 
    const pssword = 
      document.querySelector('#id_password');
 
    togglePassword.
      addEventListener('click', function (e) {
 
            
    const type = password.getAttribute(
      'type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
 
           
    if (togglePassword.src.match(
      "./images/visibility_off_20dp_FILL0_wght400_GRAD0_opsz20.png")) {
      togglePassword.src =
      "./images/visibility_20dp_FILL0_wght400_GRAD0_opsz20.png";} 
    else {
    togglePassword.src =
    "./images/visibility_off_20dp_FILL0_wght400_GRAD0_opsz20.png";
    }
  }
); 



