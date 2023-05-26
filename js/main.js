// Change Particles
const doParticles = true;

// Do not change

const getWidth = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};


if (doParticles) {
    if (getWidth() < 400) $.firefly({
        minPixel: 1,
        maxPixel: 2,

        /* Change amount of firefly particles*/
        total: 50
    });
    else $.firefly({
        minPixel: 1,
        maxPixel: 3,
        /* Change amount of firefly particles*/
        total: 50
    });
}