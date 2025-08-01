
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('error-message');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    error.textContent = 'Please fill in all fields.';
    return;
  }

  if (!email.match(emailPattern)) {
    error.textContent = 'Please enter a valid email address.';
    return;
  }

  error.textContent = '';
  alert('Form submitted successfully!');
  document.getElementById('form').reset();
});
