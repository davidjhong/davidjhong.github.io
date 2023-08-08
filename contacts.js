function slideInNav() {
    document.getElementById("mainNav").classList.add("slideIn");
}
  
  window.onload = slideInNav;


function toggleNavMenu() {
    const menu = document.getElementById("menuItems");
    menu.classList.toggle("show-mobile-menu");
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', handleSubmit); 

function handleSubmit(e) {

  e.preventDefault();
  
  const email = form.email.value;

  if(isValidEmail(email)) {
  
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data 
    })
    .then(response => {
      form.reset();
      alert('Email Sent!');
    })
    .catch(error => {
      form.reset();
      alert('Email Sent!');
    });

  } else {
    alert('Please enter a valid email');
  }

}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}