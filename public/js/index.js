
const adaptMainSize = () => {
    const main = document.getElementsByTagName('MAIN')[0];
    const headerHeight = document.getElementsByTagName('HEADER')[0].offsetHeight;
    const footerHeight = document.getElementsByTagName('FOOTER')[0].offsetHeight;
    const windowHeight = window.innerHeight;

    const mainHeight = windowHeight - (headerHeight + footerHeight);

    main.style.height = mainHeight + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    adaptMainSize();
})

window.addEventListener('resize', () => {
    adaptMainSize();
})