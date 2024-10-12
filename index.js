document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        document.querySelectorAll('.menu-item').forEach(item => {
            if (category === item.getAttribute('data-category')) {
                item.style.display = 'block'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });
    });
});

