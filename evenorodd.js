function checkEvenOdd(number) {
    // Check if the remainder when divided by 2 is zero
    if (number % 2 === 0) {
        return `${number} is Even`;
    } else {
        return `${number} is Odd`;
    }
}

// Testing the function
console.log(checkEvenOdd(10)); // 10 is Even
console.log(number % 2 === 0 ? "Even" : "Odd"); // Shorthand version