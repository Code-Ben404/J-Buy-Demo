document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    // Ensure the elements exist before adding event listeners
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    const loginForm = document.getElementById('loginForm'); // Added loginForm reference

    // Register Form Logic
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const regUsername = document.getElementById('regUsername').value;
            const regPassword = document.getElementById('regPassword').value;

            localStorage.setItem('savedUsername', regUsername);
            localStorage.setItem('savedPassword', regPassword);

            console.log("Registered Username:", regUsername);
            console.log("Registered Password:", regPassword);

            // Alert the user and redirect
            alert("Registration successful! redirecting... ");
            location.href = "../HTML/login.html";
        });
    } else {
        console.error("Error: registerForm not found in the DOM!");
    }

    // Forgot Password Logic
    if (forgotForm) {
        forgotForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            const enteredUsername = document.getElementById('forgotinput').value;

            const savedUsername = localStorage.getItem('savedUsername');
            const savedPassword = localStorage.getItem('savedPassword');

            if (enteredUsername !== savedUsername) {
                alert("Username not found. Please enter your registered username.");
                return;
            } else {
                alert("Your password is: " + savedPassword);
                location.href = "../HTML/login.html";
            }
        });
    } else {
        console.error("Error: ForgotForm not found in the DOM!");
    }

    // Login Form Logic
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        const enteredUsername = document.getElementById('loginUsername').value;
        const enteredPassword = document.getElementById('loginPassword').value;

        const savedUsername = localStorage.getItem('savedUsername');
        const savedPassword = localStorage.getItem('savedPassword');

        console.log("Entered Username:", enteredUsername);
        console.log("Entered Password:", enteredPassword);
        console.log("Saved Username:", savedUsername);
        console.log("Saved Password:", savedPassword);

        if (enteredUsername === savedUsername && enteredPassword === savedPassword) {
            alert("Welcome " + savedUsername + "!");
            window.location.href = "../HTML/home_page.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
}

});
