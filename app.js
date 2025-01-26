document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const paragraph = box.querySelector('p');
            const plusIcon = box.querySelector('.fa-plus');
            const minusIcon = box.querySelector('.fa-minus');

            if (paragraph.classList.contains('hide')) {
                paragraph.classList.remove('hide');
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
            } else {
                paragraph.classList.add('hide');
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
            }
        });
    });
});



// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const moonIcon = document.querySelector('.dark-mode-toggle .fa-moon');
    const sunIcon = document.querySelector('.dark-mode-toggle .fa-sun');


    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });
});



// 
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


