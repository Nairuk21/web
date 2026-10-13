// Display current year in footer

const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Ethan Kurian`;


// Fade-in animation

const sections = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
