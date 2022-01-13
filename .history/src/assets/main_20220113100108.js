document.addEventListener("DOMContentLoaded", () => {
  const iconEyeSlashEl = document.querySelector(".fa-eye-slash");

  const iconEyeEL = document.querySelector(".fa-eye");

  const passwordInputEl = document.querySelector(".password-input");

  iconEyeSlashEl.addEventListener("click", () => {
    const typePasswordInput =
      passwordInputEl.type === "password" ? "text" : "password";

    // toggle show content password input
    passwordInputEl.setAttribute("type", typePasswordInput);

    

    if(iconEyeSlashEl){
// this.classList.remove(".fa-eye-slash");
    // iconEyeEL.classList.remove(".fa-eye");
    }
  });
});
