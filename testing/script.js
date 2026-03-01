// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mock Sign Up (replace with Firebase later)
function signupUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email && password){
    alert(`Welcome ${email}! Your account has been created.`);
    window.location.href = "#homePage";
  } else {
    alert("Please enter email and password.");
  }
}