document.addEventListener("DOMContentLoaded", () => {
  const iconEyeEl = document.querySelector(".icon-eye");

  const passwordInputEl = document.querySelector(".password-input");
  console.log(iconEyeEl);

  iconEyeEl.addEventListener("click", () => {
    const typePasswordInput = passwordInputEl.type === 'password' ? 'text' : set;
    console.log(typePasswordInput);
  });
});
