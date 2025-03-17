document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login");
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");
    const rememberMe = document.querySelector(".remember-me");

    // Show/Hide Password
    document.querySelector(".toggle-password").addEventListener("click",()=>{
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        this.textContent = passwordInput.type === "password" ? "👁️" : "🙈";
    });

    // Login Functionality
    loginBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please enter both email and password!");
            return;
        }

        // Get registered users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login Successful!");

            if (rememberMe.checked) {
                localStorage.setItem("loggedInUser", email);
            } else {
                sessionStorage.setItem("loggedInUser", email);
            }

            window.location.href = "/dashboard.html";
        } else {
            alert("Invalid email or password! Please register if you don't have an account.");
        }
    });

    // Auto redirect if logged in
    if (localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser")) {
        window.location.href = "/html/dashboard.html";
    }
});


document.querySelector(".register-1").addEventListener("click",()=>{
    window.location.href = "/html/register.html"
})

