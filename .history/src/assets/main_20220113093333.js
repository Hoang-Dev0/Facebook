const iconEyeEl = document.querySelector(".icon-eye");

const passwordInputEl = document.querySelector(".password-input");
console.log(passwordInputEl);
console.log(iconEyeEl)

iconEyeEl.addEventListener("click", () => {
  const typePasswordInput = passwordInputEl.type;
});
