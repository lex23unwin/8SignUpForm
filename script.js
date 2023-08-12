let password = document.querySelector("password")
let confirmPassword = document.querySelector(".confirmpassword")
let error = document.querySelectorAll(".error")

password.addEventListener("input", () => {
    if (password.value !== confirmPassword.value)
    {
        error.style.display = "block";
        password.style.border = "1px solid red";
    }
    else {
        error.style.display = "none";
        password.style.border = "1px solid green";
    }
})


confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value)
    {
        error.style.display = "block";
        confirmPassword.style.border = "1px solid red";
    }
    else {
        error.style.display = "none";
        confirmPassword.style.border = "1px solid green";
    }
})
