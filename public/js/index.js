
const adaptMainSize = () => {
    const main = document.getElementsByTagName('MAIN')[0];
    const containerPrincipal = document.getElementById('containerPrincipal');
    const headerHeight = document.getElementsByTagName('HEADER')[0].offsetHeight;
    const footerHeight = document.getElementsByTagName('FOOTER')[0].offsetHeight;
    const windowHeight = window.innerHeight;
    const flashMessageHeight = document.getElementById('flashMessage') ? document.getElementById('flashMessage').offsetHeight : 0;

    const mainHeight = windowHeight - (headerHeight + footerHeight);
    const containerPrincipalHeight = mainHeight - flashMessageHeight;

    main.style.height = mainHeight + 'px';
    containerPrincipal.style.minHeight = containerPrincipalHeight + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    adaptMainSize();
})

window.addEventListener('resize', () => {
    adaptMainSize();
})