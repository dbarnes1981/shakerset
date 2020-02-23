// Event Listeners
// document.getElementById('info').addEventListener ('submit', function(e) {
//   const name = document.getElementById('formGroupExampleInput').value,
//    email = document.getElementById('formGroupExampleInput2').value,
//    phone = document.getElementById('formGroupExampleInput3').value

//    const upDetail = new upDetail(name, email, phone);

//    if(name === '' || email === '' || phone === '') {
//      console.log('Failed');
//    }

// });

const form = document.getElementById('info');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone'); 

form.addEventListener('submit', (e) => {
  e.preventDefault();

  return checkInputs();
});

function checkInputs() {
  // Get the values from the inputs
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if(nameValue === '') {
    // show error
    // add error class
    setError(name, 'Name cannot be blank');
  } else {
    // add success class
    setSuccess(name);
  }

  if(emailValue === '') {
    // show error
    // add error class
    setError(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)){
    setError(email, 'Email is not valid');
    // add success class
    setSuccess(email);
  }

  if(phoneValue === '') {
    // show error
    // add error class
    setError(phone, 'Phone number cannot be blank');
  } else {
    // add success class
    setSuccess(email); 
  }
}

//Set setError Function
function setError(input, message) {
  const formControl = input.parentElement; 
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Set setSuccess Function
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

  
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Smooth Scroll
$('.nav-link').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800 
    );
  };
});