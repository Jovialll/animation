const gifSection = document.querySelector('.gif-section');
const subpageSection = document.querySelector('.subpage-section');
let gifZoomed = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const gifSectionOffset = gifSection.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > gifSectionOffset && !gifZoomed) {
        gifSection.querySelector('img').style.transform = 'scale(1.5)';
        gifZoomed = true;
    } else {
        gifSection.querySelector('img').style.transform = 'scale(1)';
        gifZoomed = false;
    }

    if (gifZoomed && scrollPosition > gifSectionOffset + windowHeight) {
        subpageSection.classList.add('active');
    } else {
        subpageSection.classList.remove('active');
    }
});