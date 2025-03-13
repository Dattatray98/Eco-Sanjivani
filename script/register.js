document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.querySelector(".register");
    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");

    // Show/Hide Password
    document.querySelector(".toggle-password").addEventListener("click", function () {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        this.textContent = passwordInput.type === "password" ? "👁️" : "🙈";
    });

    // Register Functionality
    registerBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!name || !email || !password) {
            alert("Please fill in all fields!");
            return;
        }

        // Check if email already exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert("Email is already registered! Please login.");
            return;
        }

        // Save user to localStorage
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful! Please login.");
        window.location.href = "/html/login.html";
    });
});


document.querySelector(".login-1").addEventListener("click",()=>{
    window.location.href = "/html/login.html"
})

