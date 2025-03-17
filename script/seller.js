let profile = document.querySelector(".profile");
let dropdown = document.querySelector(".dropdown-menu")

function dropdown_menu(){
    profile.addEventListener("click", ()=>{
        dropdown.style.visibility = "visible";
        dropdown.style.opacity = "1";
    })
}
dropdown_menu()

console.log(profile)
console.log(dropdown)
console.log()