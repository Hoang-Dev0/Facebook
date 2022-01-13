document.addEventListener("DOMContentLoaded", () => {
  const iconEyeSlashEl = document.querySelector(".fa-eye-slash");

  const iconEyeEL = document.querySelector(".fa-eye");

  const passwordInputEl = document.querySelector(".password-input");

  iconEyeSlashEl.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    if (iconEyeSlashEl) {
      iconEyeSlashEl.classList.remove(".fa-eye-slash");
      iconEyeSlashEl.classList.remove(".fa-eye");
    }
  });
});
