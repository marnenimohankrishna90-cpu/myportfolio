// ==============================
// Portfolio JavaScript
// ==============================

// Welcome Alert
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Welcome to Mohan Krishna's Portfolio!");
    }, 500);
});

// ==============================
// Active Navbar
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// ==============================
// Typing Animation
// ==============================

const text = [
    "Computer Science Student",
    "Frontend Developer",
    "Python Programmer",
    "Web Designer",
    "Full Stack Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = text[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = current.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= text.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==============================
// Scroll Reveal Animation
// ==============================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top = window.innerHeight;
        const reveal = section.getBoundingClientRect().top;

        if (reveal < top - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ==============================
// Skill Bar Animation
// ==============================

const skillBars = document.querySelectorAll(".fill");

function animateSkills() {

    skillBars.forEach(bar => {

        const position = bar.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            bar.style.width = bar.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateSkills);
animateSkills();


// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

function runCounter(counter) {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => observer.observe(counter));


// ==============================
// Back To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==============================
// Header Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 0 20px cyan";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==============================
// Button Hover Effect
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==============================
// Console Message
// ==============================

console.log("Portfolio Loaded Successfully!");

console.log("Designed by M. Mohan Krishna");