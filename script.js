document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const homeText = document.querySelector('.home-text');
    const homeImage = document.querySelector('.home-text img');
    const appsText = document.querySelector('.Apps-text');

    registerlink.addEventListener('click', () => {
        wrapper.classList.add('active');
        toggleBlur(true, 'home');
    });

    loginlink.addEventListener('click', () => {
        wrapper.classList.remove('active');
        toggleBlur(false, 'home');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        document.body.classList.add('active-popup');
        toggleBlur(true, 'home');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        document.body.classList.remove('active-popup');
        toggleBlur(false, 'home');
    });

    function toggleBlur(isBlurred, page) {
        const blurValue = isBlurred ? '10px' : '0';

        if (page === 'home') {
            homeText.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
            homeImage.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
        } else if (page === 'apps') {
            appsText.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
        }
    }
});
