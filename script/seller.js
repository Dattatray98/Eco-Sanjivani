function dropdown_menu() {
    const profile = document.querySelector(".profile");
    const dropdown = document.querySelector(".dropdown-menu");

    profile.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from bubbling to document
        dropdown.style.visibility = "visible";
        dropdown.style.opacity = "1";
    });

    document.addEventListener("click", () => {
        dropdown.style.visibility = "hidden";
        dropdown.style.opacity = "0";
    });

    dropdown.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent dropdown click from closing itself
    });
}

dropdown_menu();


function signup() {
    const login = document.querySelector(".login");
    const sign = document.querySelector(".sign");

    login.addEventListener("click", () => {
        window.location.href = "login.html"
    })

    sign.addEventListener("click", () => {
        window.location.href = "register.html"
    })
}

signup()