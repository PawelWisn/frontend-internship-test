/* Here goes your JS code */
const clickme_btn = document.getElementById("show-popup-form");
const close_btn = document.getElementsByClassName("close-btn")[0];
const popup = document.getElementsByClassName("popup")[0];

clickme_btn.addEventListener("click", () => {
  popup.style.display = "block";
});

close_btn.addEventListener("click", () => {
  popup.style.display = "none";
});

function validate_form() {
  const email = document.forms["login_form"]["email"].value;
  const password = document.forms["login_form"]["password"].value;
  const ischecked = document.forms["login_form"]["checkbox"].checked;

  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!/@/.test(email)) {
    alert("Please enter a proper email address");
    return false;
  } else if (password === "") {
    alert("Please enter your password");
    return false;
  } else if (password.length < 8) {
    alert("Your password must contain at least 8 characters");
    return false;
  } else if (!ischecked) {
    alert("Please accept the terms and conditions");
    return false;
  } else {
    return true;
  }
}
