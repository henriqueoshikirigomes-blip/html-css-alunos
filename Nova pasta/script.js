function applyTheme(theme) {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const darkButton = document.getElementById('theme-dark');
    const lightButton = document.getElementById('theme-light');

    if (darkButton) {
        darkButton.addEventListener('click', function () {
            applyTheme('dark');
        });
    }

    if (lightButton) {
        lightButton.addEventListener('click', function () {
            applyTheme('light');
        });
    }
}

document.addEventListener('DOMContentLoaded', initTheme);
