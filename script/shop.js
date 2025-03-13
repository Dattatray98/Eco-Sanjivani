const images = ["/imgs/back-2.webp", "/imgs/back-1.png","/imgs/back-3.png","/imgs/back-4.png"];
const backgroundContainer = document.querySelector(".backgroun");
let index = 0;

// Apply initial background
function createBackground(imageSrc, isInitial = false) {
    const bgDiv = document.createElement("div");
    bgDiv.classList.add("background-slide");
    bgDiv.style.backgroundImage = `url(${imageSrc})`;

    if (isInitial) {
        bgDiv.style.transform = "translateX(0)"; // Show first image
    } else {
        bgDiv.style.transform = "translateX(100%)"; // Start outside
    }

    backgroundContainer.appendChild(bgDiv);
}

// Create the first image immediately
createBackground(images[index], true);

function changeBackground() {
    let nextIndex = (index + 1) % images.length;

    // Create a new background div for the sliding effect
    createBackground(images[nextIndex]);

    // Slide effect
    setTimeout(() => {
        backgroundContainer.lastElementChild.style.transform = "translateX(0)"; // Move in
        backgroundContainer.firstElementChild.style.transform = "translateX(-100%)"; // Move old one out

        setTimeout(() => {
            backgroundContainer.firstElementChild.remove(); // Remove the old background
        }, 1000);
    }, 100);

    index = nextIndex;
}

// Run every 4 seconds
setInterval(changeBackground, 2500);
