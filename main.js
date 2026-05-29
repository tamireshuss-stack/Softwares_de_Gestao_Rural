// Seleção dos elementos do menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.nav-link-mobile');

// Função para abrir e fechar o menu ao clicar no ícone de hambúrguer
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('toggle');
});

// Função para fechar o menu automaticamente ao clicar em qualquer item do menu
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburgerBtn.classList.remove('toggle');
    });
});