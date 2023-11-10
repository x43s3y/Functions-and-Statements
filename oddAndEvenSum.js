function oddAndEvenSum(numb) {
    let even = 0;
    let odd = 0;
    let digit;   
    digit = numb % 10;
    if (digit%2) {
        odd += digit;
    }else{
        even += digit;
    }
    
    while (numb) {
        numb = Math.trunc(numb / 10);
        digit = numb % 10;
        if (digit%2) {
            odd += digit;
    }else{
        even += digit;
        }
    }
    
    return `Odd sum = ${odd}, Even sum = ${even}`
}

console.log(oddAndEvenSum(1000435));