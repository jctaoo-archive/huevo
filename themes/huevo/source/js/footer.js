const footer = document.querySelector('footer');

const positionFooter = function () {
    if (document.body.offsetHeight < window.outerHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
        footer.style.bottom = '';
    }
};

window.onresize = positionFooter;
positionFooter();
