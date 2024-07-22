document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.moving-image');
    const titles = document.querySelectorAll('.moving-text');

    function animateImage() {
        image.style.transform = 'translateX(50px)';
        setTimeout(() => {
            image.style.transform = 'translateX(-50px)';
        }, 500);
    }

    setInterval(animateImage, 1000);

    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.color = 'hsl(194, 93%, 49%)'; /* Cambiar color al pasar el mouse */
        });
        title.addEventListener('mouseout', () => {
            title.style.color = 'blue'; /* Restablecer color al salir */
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.moving-title');

    function animateTitle() {
        title.style.transform = 'translateX(20px)';
        setTimeout(() => {
            title.style.transform = 'translateX(-20px)';
        }, 500);
    }

    setInterval(animateTitle, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('mouseover', () => {
        document.querySelector('.dropdown-content').style.display = 'block';
    });

    dropbtn.addEventListener('mouseout', () => {
        setTimeout(() => {
            document.querySelector('.dropdown-content').style.display = 'none';
        }, 500);
    });
});
