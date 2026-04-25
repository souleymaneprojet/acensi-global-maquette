/*
    JavaScript simple et utile :
    1. Ouvrir/fermer le menu mobile.
    2. Fermer le menu quand on clique sur un lien.
    3. Ajouter une petite animation d'apparition au scroll.
*/

// Sélection des éléments HTML
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Ouverture / fermeture du menu mobile
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Fermeture du menu après clic sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Animation légère au scroll pour montrer une attention à l'expérience utilisateur
const animatedElements = document.querySelectorAll(
    ".stat-card, .service-card, .case-item, .career-box, .contact-form"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
});
