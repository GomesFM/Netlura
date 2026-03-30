const profileLinks = document.querySelectorAll('.profile-selection .profiles .profile-item a');

profileLinks.forEach(link => {
    link.addEventListener('click', event => {
        const profileEl = event.currentTarget.querySelector('.profile');
        if (!profileEl) return;

        const img = profileEl.querySelector('img');
        const nameEl = profileEl.querySelector('figcaption');

        if (img && nameEl) {
            localStorage.setItem('perfilAtivoNome', nameEl.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', img.src);
        }
    });
});