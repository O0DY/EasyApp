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
        toggleBlur(true);
    });

    loginlink.addEventListener('click', () => {
        wrapper.classList.remove('active');
        toggleBlur(true);
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        toggleBlur(true);
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        toggleBlur(false);
    });

    function toggleBlur(isBlurred) {
        const blurValue = isBlurred ? '10px' : '0';
        homeText.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
        homeImage.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
        appsText.style.filter = isBlurred ? `blur(${blurValue})` : 'none';
        document.body.classList[isBlurred ? 'add' : 'remove']('active-popup');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('apps.json')
        .then(response => response.json())
        .then(apps => {
            apps.forEach(app => {
                const appContainer = document.createElement('div');
                appContainer.className = 'app-container';

                const appButton = document.createElement('button');
                appButton.onclick = () => downloadApp(app.downloadUrl);

                const appIcon = document.createElement('img');
                appIcon.src = app.iconUrl;
                appIcon.alt = `${app.name} Icon`;

                const appName = document.createElement('h3');
                appName.textContent = app.name;

                const appDescription = document.createElement('p');
                appDescription.textContent = app.description;

                appButton.appendChild(appIcon);
                appButton.appendChild(appName);
                appButton.appendChild(appDescription);
                appContainer.appendChild(appButton);
                document.getElementById('appContainer').appendChild(appContainer);
            });
        })
        .catch(error => console.error('Error fetching app data:', error));

    function downloadApp(appDownloadUrl) {
        window.location.href = appDownloadUrl;
    }
});
