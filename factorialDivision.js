function factorialDivision(n, m) {
    return (factorial(n)/factorial(m)).toFixed(2);


  function factorial(n) {
    var result = n;
    if (n < 0) {
      return null;
    }
    if (n === 1 || n === 0) {
      return 1;
    } else {
      while (n >= 2) {
        result = result * (n - 1);
        n--;
      }
      return result;
    }
  }
}

console.log(factorialDivision(4, 3))
