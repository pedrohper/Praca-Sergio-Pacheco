// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const mobileNav = document.getElementById('mobile-nav');

    // Open mobile menu
    menuOpenBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        menuOpenBtn.style.display = 'none';
        menuCloseBtn.style.display = 'flex';
    });

    // Close mobile menu
    menuCloseBtn.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        menuCloseBtn.style.display = 'none';
        menuOpenBtn.style.display = 'flex';
    });

    // Handle menu item clicks
    const menuItems = document.querySelectorAll('.mobile-nav .item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');

            // Close menu
            mobileNav.classList.remove('active');
            menuCloseBtn.style.display = 'none';
            menuOpenBtn.style.display = 'flex';
        });
    });

    // Handle suggestion form submission
    const suggestionForm = document.getElementById('suggestion-form');
    if (suggestionForm) {
        suggestionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const textarea = document.getElementById('suggestion-text');
            const suggestion = textarea.value.trim();

            if (suggestion) {
                // Here you would typically send the data to a server
                // For now, we'll just show an alert and clear the form
                alert('Obrigado pela sua sugestão! Ela foi enviada com sucesso.');
                textarea.value = '';
            }
        });
    }
});
