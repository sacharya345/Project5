document.addEventListener("DOMContentLoaded", () => {

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 80) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

new Swiper(".heroSwiper", {
loop: true,
speed: 1200,
effect: "fade",
autoplay: {
delay: 5000,
disableOnInteraction: false
},
pagination: {
el: ".swiper-pagination",
clickable: true
}
});

new Swiper(".testimonialSwiper", {
loop: true,
speed: 800,
spaceBetween: 30,
autoplay: {
delay: 4000,
disableOnInteraction: false
},
breakpoints: {
0: {
slidesPerView: 1
},
768: {
slidesPerView: 2
},
1200: {
slidesPerView: 3
}
}
});

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters() {

counters.forEach(counter => {

const target = +counter.dataset.target;

let count = 0;

const increment = target / 200;

function updateCounter() {

count += increment;

if (count < target) {

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

} else {

counter.innerText = target;

}

}

updateCounter();

});

}

window.addEventListener("scroll", () => {

const counterSection = document.querySelector(".counter-section");

if (!counterSection) return;

const triggerPoint = counterSection.offsetTop - 400;

if (window.scrollY >= triggerPoint && !counterStarted) {

startCounters();

counterStarted = true;

}

});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

revealElements.forEach(element => {

const windowHeight = window.innerHeight;

const elementTop = element.getBoundingClientRect().top;

const revealPoint = 120;

if (elementTop < windowHeight - revealPoint) {

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e) {

const targetId = this.getAttribute("href");

if (targetId === "#") return;

const targetSection = document.querySelector(targetId);

if (targetSection) {

e.preventDefault();

window.scrollTo({
top: targetSection.offsetTop - 90,
behavior: "smooth"
});

const navbarCollapse = document.querySelector(".navbar-collapse");

if (navbarCollapse.classList.contains("show")) {

new bootstrap.Collapse(navbarCollapse).hide();

}

}

});

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.offsetHeight;

if (window.scrollY >= sectionTop &&
window.scrollY < sectionTop + sectionHeight) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0) scale(1)";

});

});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

contactForm.addEventListener("submit", e => {

e.preventDefault();

const button = contactForm.querySelector("button");

button.innerHTML = "Message Sent ✓";
button.disabled = true;

setTimeout(() => {

button.innerHTML = "Send Message";
button.disabled = false;
contactForm.reset();

}, 2500);

});

}

const heroContent = document.querySelector(".hero-content");

if (heroContent) {

heroContent.animate(
[
{
opacity: 0,
transform: "translateY(50px)"
},
{
opacity: 1,
transform: "translateY(0)"
}
],
{
duration: 1500,
easing: "ease-out",
fill: "forwards"
}
);

}

const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach(link => {

link.addEventListener("mouseenter", () => {

link.style.transform = "translateY(-8px) rotate(10deg)";

});

link.addEventListener("mouseleave", () => {

link.style.transform = "translateY(0) rotate(0deg)";

});

});

const newsletterBtn = document.querySelector("footer .btn-main");

if (newsletterBtn) {

newsletterBtn.addEventListener("click", () => {

newsletterBtn.innerHTML = "Subscribed ✓";

setTimeout(() => {

newsletterBtn.innerHTML = "Subscribe";

}, 2500);

});

}

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

});