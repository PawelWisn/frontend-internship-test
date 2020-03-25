/* Here goes your JS code */
const clickme_btn = document.getElementById("show-popup-form");
const close_btn = document.getElementsByClassName("close-btn")[0];

clickme_btn.addEventListener("click", () => {
  document.getElementsByClassName("popup")[0].style.display = "block";
});

close_btn.addEventListener("click", () => {
  document.getElementsByClassName("popup")[0].style.display = "none";
});
