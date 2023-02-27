document.addEventListener("DOMContentLoaded", function () {
  var data = {};
  var finalemail = false;
  var finalpassword = false;
  var finalnumber = false;


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

    validate_button.addEventListener("click",function(){
      var output_age = document.querySelector(".output1");
      output_age.textContent = "Your age is " + age + ", " + isPrime(age);
    })

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
        finalemail = true;
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
  var true_password = "";

  password_input.addEventListener("input", function () {
    var password = this.value;

    function validPassword(password) {
      if (containsUppercase(password) && passwordLength(password) && containsSpecialChars(password)) {
        finalpassword = true;
        return true;
      }
      else {
        return false;
      }
    }

    function containsUppercase(str) {
      return /[A-Z]/.test(str);
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
      if (validPassword(password)) {
        password_title.innerText = "password is valid";
        password_title.style.color = "green";
        true_password = password;
      } else {
        password_title.innerText = "password is unvalid!";
        password_title.style.color = "red";
      }
    })
    data.password = true_password;
  })

  //-----------------------------------------------------------------------------------------



  //fullname -----------------------------------------------------------------------------
  var fullname = document.getElementById("name");
  fullname.addEventListener("input", function () {
    var first = document.getElementById("fname").value;
    var mid = document.getElementById("midname").value;
    var last = document.getElementById("lname").value;

    function getFullName(str1, str2, str3) {
      return str1 + " " + str2 + " " + str3
    }

    validate_button.addEventListener("click",function(){
      reversed_fname = first.split("").reverse().join("");
      final_name = reversed_fname.concat("ay");
      var reversed = document.querySelector(".output3");
      reversed.textContent = "Your New First Name is " + "'" + final_name + "'"
    })

    data.fullname = getFullName(first, mid, last);
  })
  //-----------------------------------------------------------------------------------------



  //phonenumebr---------------------------------------------------------------------------
  var phone_number = document.getElementById("phnumber");
  var phone_title = document.getElementById("phone_number")
  phone_number.addEventListener("input", function () {
    var phone = document.getElementById("phnumber").value;
    data.phonenumber = phone;

    var sorted_number = phone.toString().split('').map(Number);

    function mergeSort(sorted_number) {
      if (sorted_number.length <= 1) {
        return sorted_number;
      }

      var middle = Math.floor(sorted_number.length / 2);
      var left = sorted_number.slice(0, middle);
      var right = sorted_number.slice(middle);

      var sortedLeft = mergeSort(left);
      var sortedRight = mergeSort(right);

      return merge(sortedLeft, sortedRight);
    }

    function merge(left, right) {
      var result = [];
      var leftIndex = 0;
      var rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    var final_sortedArray = mergeSort(sorted_number)

    validate_button.addEventListener("click",function(){
      var output_sorted = document.querySelector(".output2");
      output_sorted.textContent = "Your sorted phone number is " + final_sortedArray;
    })


    function validNumber(phone) {
      if (phone.length == 11) {
        finalnumber = true;
        return true;
      }
      else {
        return false;
      }
    }


    validate_button.addEventListener("click", function () {
      if (validNumber(phone)) {
        phone_title.innerText = "Phone number is valid";
        phone_title.style.color = "green";
      } else {
        phone_title.innerText = "Phone number is unvalid";
        phone_title.style.color = "red";
      }
    })
  })


  //-----------------------------------------------------------------------------------------
  /*validate_button.addEventListener("click", function () {
    if (finalemail && finalnumber && finalpassword) {
      console.log("success")
    } else if (finalemail == false) {
      console.log("email fail")
    }
    else if (finalnumber == false){
      console.log("phone fail")
    }
    else if(finalpassword==false){
      console.log("password fail")
    }
  })*/


})
