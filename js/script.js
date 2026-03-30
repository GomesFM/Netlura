const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

const updateButtonText = () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    toggleBtn.textContent = isLight ? 'Modo escuro' : 'Modo claro';
};

const savedTheme = localStorage.getItem('netflix-theme');
if (savedTheme === 'light') {
    root.setAttribute('data-theme', 'light');
} else {
    root.removeAttribute('data-theme');
}
updateButtonText();

toggleBtn.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.setItem('netflix-theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('netflix-theme', 'light');
    }
    updateButtonText();
});