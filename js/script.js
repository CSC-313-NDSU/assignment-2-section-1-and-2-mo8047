// Form validation for the contact form

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop the page from refreshing

  // Check if the form is valid using Bootstrap validation
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  // If valid show a success message
  alert('Thanks for your message! I will get back to you soon.');
  form.reset();
  form.classList.remove('was-validated');
});
