var typed =new Typed(".text",{
    strings: ["Python Developer","Data Structure Expert","Web Developer","Data Analyst"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false,
    cursorChar: "|"
});     
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Change cursor size on hover
document.querySelectorAll('a, .btn-box').forEach((element) => {
    element.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});
