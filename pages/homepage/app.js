// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Show screen size
function showScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const output = document.getElementById('demoOutput');
    const screenWidth = document.getElementById('screenWidth');

    screenWidth.textContent = width;

    let deviceType = '';
    if (width < 480) deviceType = 'Mobile';
    else if (width < 768) deviceType = 'Large Mobile';
    else if (width < 1024) deviceType = 'Tablet';
    else if (width < 1200) deviceType = 'Desktop';
    else deviceType = 'Large Desktop';

    output.innerHTML = `
        Screen: ${width}px × ${height}px<br>
        Device Type: ${deviceType}<br>
        Orientation: ${width > height ? 'Landscape' : 'Portrait'}
    `;
}

// Theme toggle
let isDark = false;
function toggleTheme() {
    isDark = !isDark;
    document.body.style.filter = isDark ? 'invert(1) hue-rotate(180deg)' : 'none';
}

// Update screen size on resize
window.addEventListener('resize', showScreenSize);

// Initial screen size display
showScreenSize();

// Add scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    Fdocument.getElementById("myBar").style.width = scrolled + "%";
};