document.addEventListener("DOMContentLoaded", () => {
  const iconEyeEl = document.querySelector(".icon-eye");

  const iconEyeEL = document.querySelector(".fa-eye");

  const passwordInputEl = document.querySelector(".password-input");

  iconEyeEl.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    if (iconEyeEl) {
      iconEyeEl.classList.remove("fa-eye-slash");
      iconEyeEl.classList.add("fa-eye");
    } else {
      iconEyeEl.classList.remove("fa-eye");
      iconEyeEl.classList.add("fa-eye-slash");
    }

    iconEyeEl.classList.contains(".fa-eye-slash") ? ;
  });
});
