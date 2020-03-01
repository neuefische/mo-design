const button = document.querySelector("#send-btn");

function addRreviewInput() {
  let reviewInputOriginal = document.querySelector("textarea").value;
  if (reviewInputOriginal.length > 5 && !reviewInputOriginal.length == 0) {
    const reviewSlider = document.querySelector(".review-slider");
    let review = document.createElement("div");
    let reviewText = document.createElement("p");
    reviewText.innerHTML = reviewInputOriginal;
    review.classList = "review";
    reviewText.classList = "text review-text";
    review.appendChild(reviewText);
    reviewSlider.appendChild(review);
  } else {
    alert("Please, write a little more!");
  }
}

button.addEventListener("click", function() {
  addRreviewInput();
});
