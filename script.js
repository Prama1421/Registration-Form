const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const phone = document.getElementById('phone');
  const errors = document.querySelectorAll('.error-message');

  // Clear previous error messages
  errors.forEach(error => error.textContent = '');

  let isValid = true;

  // Name validation
  if (name.value.trim() === '') {
    showError(name, 'Name is required');
    isValid = false;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, 'Invalid email format');
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, 'Password must be at least 6 characters');
    isValid = false;
  }

  // Confirm Password validation
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Passwords do not match');
    isValid = false;
  }

  // Phone number validation
  if (!/^\d{10}$/.test(phone.value)) {
    showError(phone, 'Phone number must be 10 digits');
    isValid = false;
  }

  if (isValid) {
    alert('Registration successful!');
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  input.style.borderColor = 'red';
}
