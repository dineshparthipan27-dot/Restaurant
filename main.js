
document.addEventListener('DOMContentLoaded', () => {


    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');


    hamburgerBtn.addEventListener('click', () => {

        mobileMenu.classList.toggle('show-mobile-menu');

        hamburgerBtn.classList.toggle('active');
    });


    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show-mobile-menu');
            hamburgerBtn.classList.remove('active');
        });
    });

});


if (typeof gsap !== 'undefined') {
    const socialIcons = document.querySelectorAll('.gs-hover-float');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { y: -8, scale: 1.1, duration: 0.3, ease: 'power2.out' });
        });
        icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
}