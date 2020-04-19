const navbarLinks = document.querySelectorAll('.navbar a');

for (let i=0; i<navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {
    smoothScroll(event);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetID = event.currentTarget.getAttribute('href') === '#' ? 'header' : event.currentTarget.getAttribute('href');
    console.log(targetID);
    const targetPosition = document.querySelector(targetID).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
}

function easeInOutQuad (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};




