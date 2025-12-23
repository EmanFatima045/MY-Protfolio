function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// for Typewriter effect
const texts = [
    "CYBER EXPERT",
    "DIGITAL FORENSICS SPECIALIST",
    "WEB DEVELOPER",
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// CV Download functionality
function downloadCV() {
    const link = document.createElement("a");
    link.href = "./Resume_Eman_Fatima.pdf"; // Correct relative path
    link.download = "Eman_Fatima_CV.pdf";   // Name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
