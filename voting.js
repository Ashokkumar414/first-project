function checkVotingEligibility(age) {
    const legalAge = 18;

    if (age >= legalAge) {
        return "Eligible to vote! Please ensure you are registered.";
    } else {
        // Calculate how many years are left
        const yearsToWait = legalAge - age;
        return `Not eligible yet. You can vote in ${yearsToWait} year(s).`;
    }
}

// Examples:
console.log(checkVotingEligibility(20)); // Eligible to vote!
console.log(checkVotingEligibility(18)); // Eligible to vote!
console.log(checkVotingEligibility(15)); // Not eligible yet. You can vote in  6 year(s).