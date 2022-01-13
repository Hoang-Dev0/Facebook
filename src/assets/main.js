document.addEventListener("DOMContentLoaded", () => {
  const iconEyeEl = document.getElementById("icon-eye");

  const passwordInputEl = document.querySelector(".password-input");

  iconEyeEl.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    iconEyeEl.classList.toggle("fa-eye");
    iconEyeEl.classList.toggle("fa-eye-slash");
  });
});
