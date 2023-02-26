document.addEventListener("DOMContentLoaded", function () {


  // age -----------------------------------------------------------------------
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
  //----------------------------------------------------------------------------------------





  // email ---------------------------------------------------------------------------------
  var email_input = document.getElementById("user_email");
  var email_title = document.getElementById("email_address");
  var validate_button = document.getElementById("validate");

  email_input.addEventListener("input", function () {
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

    validate_button.addEventListener("click", function () {
      if (ValidateEmail(email)) {
        email_title.innerText = "Email is valid";
        email_title.style.color = "green";
      } else {
        email_title.innerText = "Email is unvalid";
        email_title.style.color = "red";
      }
    })
  });
  //-----------------------------------------------------------------------------------------




  //password ------------------------------------------------------------------------------
  var password_input = document.getElementById("user_password");
  var password_title = document.getElementById("password")
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

    validate_button.addEventListener("click", function () {
      if (containsUppercase(password) && passwordLength(password) && containsSpecialChars(password)) {
        password_title.innerText = "password is valid";
        password_title.style.color = "green";
      } else {
        password_title.innerText = "password is unvalid!";
        password_title.style.color = "red";
      }
    })

  })
  //-----------------------------------------------------------------------------------------



  //fullname -----------------------------------------------------------------------------
  var fullname = document.getElementById("name");
  fullname.addEventListener("input",function(){
    var first = document.getElementById("fname").value;
    var mid = document.getElementById("midname").value;
    var last = document.getElementById("lname").value;

    function getFullName(str1,str2,str3){
      return str1 + " " + str2 + " " + str3 
    }

    console.log(getFullName(first,mid,last));
  })


})
