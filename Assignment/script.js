document.addEventListener('DOMContentLoaded', () => {
    const welcomeHeading = document.querySelector('.welcome-heading');
    
    // Adding a delay to allow the transition to look smoother
    setTimeout(() => {
        welcomeHeading.classList.add('show');
    }, 100); // Adjust delay time if necessary
});
