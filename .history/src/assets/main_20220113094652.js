document.addEventListener("DOMContentLoaded", () => {
  const iconEyeEl = document.querySelector(".icon-eye");

  const

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
