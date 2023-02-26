document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("birthday").addEventListener("change", function () {
    var DOB = this.value;
    var birth_date = new Date(DOB);
    var current_date = new Date()
    var birth_year = current_date.getFullYear() - birth_date.getFullYear();
    var birth_month = birth_date.getMonth() - current_date.getMonth();
    var age;

    if (birth_month > 0) {
      age = birth_year - 1;
    }
    else if (birth_month <= 0) {
      age = birth_year;
    }

    function isPrime(n) {
      if (n <= 1) {
        return "it is not prime";
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return "it is not prime"
        }
      }
      return "it is prime";
    }
    var output_age = document.querySelector(".output1");
    output_age.textContent = "Your age is " + age + ", " + isPrime(age);

  });

  var email_input = document.getElementsByClassName("user_email");
  email_input[0].addEventListener("input", function () {
    var email = this.value;

    function ValidateEmail(email) {
      var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(format)) {
        return true;
      }
      else {
        return false;
      }
    }

  });

  var password_input = document.getElementById("user_password");
  password_input.addEventListener("input", function () {
    var password = this.value;

    function containsUppercase(str) {
      return /[A-Z]/.test(password);
    }

    function passwordLength(str) {
      if (str.length >= 8) {
        return true;
      }
      else {
        return false;
      }
    }

    function containsSpecialChars(str) {
      var specialChars =
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }

  })


})
