document.addEventListener("DOMContentLoaded", () => {
  const iconEyeSlashEl = document.querySelector(".fa-eye-slash");

  const iconEyeEL = document.querySelector(.)

  const passwordInputEl = document.querySelector(".password-input");
  console.log(iconEyeEl);

  iconEyeEl.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    iconEyeEl


  });
});
