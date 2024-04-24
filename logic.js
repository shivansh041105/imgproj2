function validateForm() {
      var qualification = document.getElementById('qualification').value;
      var phone = document.getElementById('phone').value;
      var age = document.getElementById('age').value;
      var gender = document.getElementById('gender').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirm-password').value;
      var name = document.getElementById('name').value;
      var city = document.getElementById('city').value;

      var phoneRegex = /^[6-9]\d{9}$/; 
      var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

      if (!qualification || !phone || !age || !gender || !email || !password || !confirmPassword || !name || !city) {
        alert("All fields are required");
        return false;
      }

      if (!phone.match(phoneRegex)) {
        document.getElementById('phone-error').innerText = "Please enter a valid Indian mobile number";
        return false;
      }

      if (!email.match(emailRegex)) {
        document.getElementById('email-error').innerText = "Please enter a valid email address";
        return false;
      }

      if (password !== confirmPassword) {
        document.getElementById('password-match-error').innerText = "Passwords do not match";
        return false;
      }

      return true; 
}