const translateRating = (score) => {
  const descriptions = {
    1: "Poor",
    2: "Average",
    3: "Good"
  };

  // Return the match, or a fallback if the number isn't 1, 2, or 3
  return descriptions[score] || "Invalid rating";
};

// Example usage:
console.log(translateRating(1)); // Output: Poor
console.log(translateRating(3)); // Output: Good