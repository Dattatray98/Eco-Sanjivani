// document.addEventListener("DOMContentLoaded", () => {
//     // Profile dropdown elements
//     const dropdownBtn = document.getElementById("dropdownBtn");
//     const dropdownMenu = document.getElementById("dropdownMenu");

//     // "My Products" dropdown elements
//     const productsDropdownBtn = document.getElementById("productsDropdownBtn");
//     const productsDropdownMenu = document.getElementById("productsDropdownMenu");

//     // Function to close both dropdowns
//     function closeDropdowns() {
//         dropdownMenu.classList.remove("show");
//         productsDropdownMenu.classList.remove("show");
//     }

//     // Profile dropdown toggle
//     dropdownBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         closeDropdowns(); // Close other dropdown
//         dropdownMenu.classList.toggle("show");
//     });

//     // "My Products" dropdown toggle
//     productsDropdownBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         event.stopPropagation();
//         closeDropdowns(); // Close other dropdown
//         productsDropdownMenu.classList.toggle("show");
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener("click", (event) => {
//         if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target) &&
//             !productsDropdownBtn.contains(event.target) && !productsDropdownMenu.contains(event.target)) {
//             closeDropdowns();
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    // Profile dropdown elements
    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");

    // "My Products" dropdown elements
    const productsDropdownBtn = document.getElementById("productsDropdownBtn");
    const productsDropdownMenu = document.getElementById("productsDropdownMenu");

    // Function to close both dropdowns
    function closeDropdowns() {
        dropdownMenu.classList.remove("show");
        productsDropdownMenu.classList.remove("show");
    }

    // Profile dropdown toggle
    dropdownBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeDropdowns();
        dropdownMenu.classList.toggle("show");
    });

    // "My Products" dropdown toggle
    productsDropdownBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        closeDropdowns();
        productsDropdownMenu.classList.toggle("show");
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (event) => {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target) &&
            !productsDropdownBtn.contains(event.target) && !productsDropdownMenu.contains(event.target)) {
            closeDropdowns();
        }
    });

    // Check user login status and update the profile dropdown
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    updateProfileDropdown(userLoggedIn);
});

// Function to update profile dropdown based on login status
// function updateProfileDropdown(isLoggedIn) {
//     const dropdownMenu = document.getElementById("dropdownMenu");
//     dropdownMenu.innerHTML = ""; // Clear existing items

//     if (isLoggedIn) {
//         dropdownMenu.innerHTML = `
//             <li><a href="#">My Profile</a></li>
//             <li><a href="#">My Store</a></li>
//             <li><a href="#" id="logoutBtn">Logout</a></li>
//         `;
//         document.getElementById("logoutBtn").addEventListener("click", () => {
//             localStorage.removeItem("userLoggedIn");
//             window.location.reload();
//         });
//     } else {
//         dropdownMenu.innerHTML = `<li><a href="/html/login.html">Login</a></li>`;
//     }
// }
















// new drop down

function updateProfileDropdown(isLoggedIn) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.innerHTML = ""; // Clear existing items

    if (isLoggedIn) {
        dropdownMenu.innerHTML = `
            <li><a href="#">My Profile</a></li>
            <li><a href="#">My Store</a></li>
            <li><a href="#" id="logoutBtn">Logout</a></li>
        `;
        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            sessionStorage.removeItem("loggedInUser");
            window.location.reload();
        });
    } else {
        dropdownMenu.innerHTML = `
            <li><a href="/login.html">Login</a></li>
            <li><a href="/html/register.html">Register</a></li>
        `;
    }
}

