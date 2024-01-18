const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const inputAddress = document.querySelector("#inputAddress");
const inputCity = document.querySelector("#inputCity");
const inputState = document.querySelector("#inputState");
const inputZip = document.querySelector("#inputZip");
const gridCheck = document.querySelector("#gridCheck");
const btn = document.querySelector("#btn");

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function validate() {
  if (inputName.value.trim() === "" || inputName.value.length <= 3) {
    inputName.focus();
    alert("Name 3ta belgidan kp'proq bo'lishi kerak");
    return false;
  }

  if (!ValidateEmail(inputEmail.value)) {
    alert("Email noto'g'ri kiritildi");
    inputEmail.focus();
    return false;
  }

  if (inputPassword.value.trim() === "" || inputPassword.value.length <= 5) {
    alert("Parol 6ta belgidan ko'proq bo'lishi kerak");
    inputPassword.focus();
    return false;
  }

  if (inputAddress.value.trim() === "" || inputAddress.value.length <= 3) {
    alert("Address noto'g'ri kiritildi");
    inputAddress.focus();
    return false;
  }

  if (inputCity.value.trim() === "" || inputCity.value.length <= 3) {
    alert("City noto'g'ri kiritildi");
    inputCity.focus();
    return false;
  }

  if (inputState.value.trim() == "") {
    alert("Please choose an option.");
    return false;
  }

  return true;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (validate()) {
    alert("Validatsiyadan o'tdi");
  } else {
    console.log("Validatsiyadan o'tmadi");
  }
});
