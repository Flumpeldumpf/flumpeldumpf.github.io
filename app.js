const scrollEl = document.getElementById('poster-scroll');
const leftNav = document.getElementById('nav-left');
const rightNav = document.getElementById('nav-right');
const maxSpeed = 50; // maximum pixels per frame
let speed = 0;

// Continuous animation loop
function animate() {
    if (speed !== 0) {
        // Round speed to nearest integer to ensure actual scrolling
        const intSpeed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        scrollEl.scrollLeft += intSpeed;
    }
    requestAnimationFrame(animate);
}
animate();

// On mouse move over left nav, set negative speed proportional to distance from edge
leftNav.addEventListener('mousemove', e => {
    const rect = leftNav.getBoundingClientRect();
    const ratio = (rect.right - e.clientX) / rect.width;
    speed = -Math.pow(ratio, 2) * maxSpeed;
});
leftNav.addEventListener('mouseleave', () => {
    speed = 0;
});

// On mouse move over right nav, set positive speed proportional to distance from edge
rightNav.addEventListener('mousemove', e => {
    const rect = rightNav.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    speed = Math.pow(ratio, 2) * maxSpeed;
});
rightNav.addEventListener('mouseleave', () => {
    speed = 0;
});