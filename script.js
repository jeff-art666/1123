document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    console.log('Sociological field notes initialized.');
});
