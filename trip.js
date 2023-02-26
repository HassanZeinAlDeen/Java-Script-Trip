window.onload = function () {
  document.getElementById("birthday").addEventListener("change", function () {
    var DOB = this.value;
    var dateEntered = new Date(DOB);
    var current_date = new Date()
    var birth_year = current_date.getFullYear() - dateEntered.getFullYear();
    var birth_month = dateEntered.getMonth() - current_date.getMonth();
    var age;

    if (birth_month > 0) {
      age = birth_year - 1;
    }
    else if (birth_month <= 0) {
      age = birth_year;
    }

    function isPrime(n) {
      if (n <= 1) {
        return false;
      }
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }

    console.log(age);
    console.log(isPrime(age))
  });
}
