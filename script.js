const submitted = () => {
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPass = document.getElementById("errorPass");
    const errorConPass = document.getElementById("errorConPass");
    const errorNumber = document.getElementById("errorNumber");

    const inputName = document.getElementById("inp1").value;
    const inputEmail = document.getElementById("inp2").value;
    const inputPass = document.getElementById("inp3").value;
    const inputConPass = document.getElementById("inp4").value;
    const inputNumber = document.getElementById("inp5").value;

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPass.innerHTML = "";
    errorConPass.innerHTML = "";
    errorNumber.innerHTML = "";

    if (inputName === "") {
        errorName.innerHTML = "Please enter your name";
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail === "" || !emailPattern.test(inputEmail)) {
        errorEmail.innerHTML = "Please enter a valid email address (e.g., name@gmail.com)";
        return false;
    }

    if (inputPass === "") {
        errorPass.innerHTML = "Please enter your password";
        return false;
    }

    if (inputConPass === "") {
        errorConPass.innerHTML = "Please confirm your password";
        return false;
    }

    if (inputPass !== inputConPass) {
        errorConPass.innerHTML = "Passwords do not match";
        return false;
    }

    if (inputNumber === "" || inputNumber <= 0) {
        errorNumber.innerHTML = "Please enter a valid number";
        return false;
    }

    return true;
}





















































































