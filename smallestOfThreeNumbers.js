function smallestOfThreeNumbers(a, b, c) {
    return (a < b && a < c) ? a : (c < b) ? c :b;
}

console.log(smallestOfThreeNumbers(22, -5, 3));