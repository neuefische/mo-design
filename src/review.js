function addReview() {
  const reviewSlider = document.querySelector(".review-slider");
  let review = document.createElement("div");
  let reviewText = document.createElement("p");
  let reviewTextContent = document.createTextNode("Test test test");
  review.classList = "review";
  reviewText.classList = "text review-text";
  reviewText.appendChild(reviewTextContent);
  review.appendChild(reviewText);
  reviewSlider.appendChild(review);
}

addReview();
