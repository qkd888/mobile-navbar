const links = document.querySelectorAll('.menu > li > a');

links.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.submenu').forEach(menu => menu.classList.remove('open'));
        link.parentElement.querySelector('.submenu').classList.toggle('open');
    });
});