function palindromeIntegers(numbers=[]) {
    numbers.forEach(element => {
       console.log(element.toString() == element.toString().split('').reverse().join(''));
    });
}

palindromeIntegers([123,323,421,121]);