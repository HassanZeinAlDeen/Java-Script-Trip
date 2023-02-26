window.onload = function () {
  document.getElementById("birthday").addEventListener("change", function () {
    var DOB = this.value;
    var birth_date = new Date(DOB);
    var current_date = new Date()
    var birth_year = current_date.getFullYear() - birth_date.getFullYear();
    var birth_month = birth_date.getMonth() - current_date.getMonth();
    var age;
    var ageoutput = "it is prime";

    if (birth_month > 0) {
      age = birth_year - 1;
    }
    else if (birth_month <= 0) {
      age = birth_year;
    }

    function isPrime(n) {
      if (n <= 1) {
        ageoutput = "it is not prime"
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          ageoutput = "it is not prime"
          return false;
        }
      }
      return true;
    }

    var output_age = document.querySelector(".output1");
    output_age.textContent = "Your age is " + age + ", " + ageoutput;

  });
}
