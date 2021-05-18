const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const reloadBtn = document.querySelector(".reload");
const saved = document.querySelector(".saved");

storageInput.addEventListener("input", function (e) {
  const saveInput = e.target.value;
  text.textContent = saveInput;
  localStorage.setItem("textinput", text.textContent);

  if (text.textContent === "") {
    text.textContent = "Text";
  }

  if (e.target.value.length >= 15) {
    alert("Character limit reached");
    text.textContent = "Text";
  }
});

function saveInput() {
  localStorage.getItem("textinput");
  console.log(localStorage.getItem("textinput"));
  saved.classList.add("saved-show");
}

button.addEventListener("click", function (e) {
  saveInput();

  if (e.target === button) {
    reloadBtn.classList.add("reload-show");
  } else {
    reloadBtn.classList.remove("reload-show");
  }
});

reloadBtn.addEventListener("click", function (e) {
  reloadBtn.classList.remove("reload-show");
  saved.classList.remove("saved-show");
  text.textContent = "Text";
});
