const input = document.getElementById("validation-input");
input.addEventListener("blur", onBlur);
function onBlur() {
  const value = input.value.trim();
  const length = input.getAttribute("data-length");
  if (value.length === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}