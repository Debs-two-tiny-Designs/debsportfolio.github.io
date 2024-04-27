// JavaScript for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for adding active class to the current navigation link
var navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// JavaScript for animation effects
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const projectsSection = document.getElementById('projects');
    const projectsPosition = projectsSection.getBoundingClientRect().top;

    if (projectsPosition < windowHeight / 1.5) {
        projectsSection.classList.add('fadeIn');
    }
});
// JavaScript for smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for adding active class to the current navigation link
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// JavaScript for hover effect on project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });

    card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});

// JavaScript for dynamic content loading
window.addEventListener('DOMContentLoaded', () => {
    // Simulate loading project details dynamically
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const projectId = this.dataset.projectId;
            const projectDetailsContainer = document.getElementById('project-details-container');
            
            // Fetch project details from server or load from a JSON object
            const projectDetails = {
                id: projectId,
                title: 'Project Title ' + projectId,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id fringilla nulla, ac molestie lorem.',
                technologies: ['HTML', 'CSS', 'JavaScript'],
                demoLink: '#', // Replace '#' with actual project demo link
                githubLink: '#' // Replace '#' with actual project GitHub link
            };

            // Generate HTML markup for project details
            const projectDetailsHTML = `
                <div class="project-details">
                    <h2>${projectDetails.title}</h2>
                    <p>${projectDetails.description}</p>
                    <p><strong>Technologies:</strong> ${projectDetails.technologies.join(', ')}</p>
                    <a href="${projectDetails.demoLink}" target="_blank">View Demo</a>
                    <a href="${projectDetails.githubLink}" target="_blank">GitHub Repository</a>
                </div>
            `;

            // Replace existing project details with new content
            projectDetailsContainer.innerHTML = projectDetailsHTML;
        });
    });
});
