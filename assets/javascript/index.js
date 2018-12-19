function showHidePassword() {
  var passwordInput = document.getElementById("password-input");
  var showHidePasswordButton = document.getElementById("show-hide-password-button");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHidePasswordButton.classList.remove("fa-eye-slash");
    showHidePasswordButton.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    showHidePasswordButton.classList.remove("fa-eye");
    showHidePasswordButton.classList.add("fa-eye-slash");
  }
}
