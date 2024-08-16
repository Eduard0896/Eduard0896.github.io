document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const sidebar = document.getElementById('sidebar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide the sidebar
            sidebar.classList.add('hide');
        } else {
            // Scrolling up - show the sidebar
            sidebar.classList.remove('hide');
        }
        
        lastScrollTop = scrollTop;
    });
});