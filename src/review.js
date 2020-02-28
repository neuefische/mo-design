const button = document.querySelector("#send-btn");

function readReviewInput() {
  const reviewInputOriginal = document.querySelector("textarea").value;
  return reviewInputOriginal;
}

function addReview() {
  const reviewSlider = document.querySelector(".review-slider");
  let review = document.createElement("div");
  let reviewText = document.createElement("p");
  reviewText.innerHTML = readReviewInput();
  review.classList = "review";
  reviewText.classList = "text review-text";
  review.appendChild(reviewText);
  reviewSlider.appendChild(review);
}

button.addEventListener("click", () => {
  readReviewInput();
  addReview();
});
