document.addEventListener("DOMContentLoaded", () => {
  const iconEyeEl = document.querySelector(".icon-eye");

  const iconEyeEL = document.querySelector(".fa-eye");

  const passwordInputEl = document.querySelector(".password-input");

  icon-eye.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    if (iconEyeSlashEl) {
      iconEyeSlashEl.classList.remove("fa-eye-slash");
      iconEyeSlashEl.classList.add("fa-eye");
    } else {
      iconEyeSlashEl.classList.remove("fa-eye");
      iconEyeSlashEl.classList.add("fa-eye-slash");
    }
  });
});
