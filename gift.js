const gifSection = document.querySelector('.gif-section');
const subpageSection = document.querySelector('.subpage-section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const gifSectionOffset = gifSection.offsetTop;
    const windowHeight = window.innerHeight;
    const gifElement = gifSection.querySelector('img');

    const scaleFactor = 0.2; // scale factor
    const scale = 1 + (scrollPosition - gifSectionOffset) / (windowHeight * scaleFactor); // Adjust divisor for scaling speed

    if (scrollPosition > gifSectionOffset) {
        gifElement.style.transform = `scale(${scale})`;
    } else {
        gifElement.style.transform = 'scale(1)';
    }

    if (scrollPosition > gifSectionOffset + windowHeight) {
        subpageSection.classList.add('active');
    } else {
        subpageSection.classList.remove('active');
    }
});