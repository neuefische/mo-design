function getReview() {
  const reviewInputOriginal = document.querySelector("textarea");
  const reviewInput = reviewInputOriginal.value;
  return reviewInput;
}

console.log(getReview());

function addReview() {
  const reviewSlider = document.querySelector(".review-slider");
  let review = document.createElement("div");
  let reviewText = document.createElement("p");
  reviewText.innerHTML = getReview();
  review.classList = "review";
  reviewText.classList = "text review-text";
  review.appendChild(reviewText);
  reviewSlider.appendChild(review);
}

addReview();
