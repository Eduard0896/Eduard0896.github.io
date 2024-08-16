document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide the navbar
            navbar.style.top = '-60px';
        } else {
            // Scrolling up - show the navbar
            navbar.style.top = '0';
        }
        
        lastScrollTop = scrollTop;
    });
});