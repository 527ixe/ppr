const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const contentDiv = document.getElementById('content');

const correctPassword = "test123"; // Replace with your desired password

submitButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    contentDiv.style.display = "block";
    loginForm.style.display = "none";
  } else {
    alert("Incorrect password!");
  }
});