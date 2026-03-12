function assignGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 75) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks > 33) {
        grade = "D (Pass)";
    } else {
        grade = "F (Fail)";
    }

    return grade;
}

// Quick Test
console.log("Score 92:", assignGrade(92)); // A
console.log("Score 80:", assignGrade(80)); // B
console.log("Score 60:", assignGrade(60)); // C
console.log("Score 25:", assignGrade(25)); // F