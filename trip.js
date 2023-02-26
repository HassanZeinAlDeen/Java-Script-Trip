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

  var emailinput = document.getElementsByClassName("user_email");
  emailinput[0].addEventListener("input", function () {
    var email = this.value;
    console.log(email)

    function is_email(email) {

      if (email.includes("@") && email.includes(".")) {
        if (email.indexOf(".") > email.indexOf("@")) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false
      }
    }

    console.log(is_email(email))

  });
})
