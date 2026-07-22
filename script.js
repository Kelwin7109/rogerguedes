// Script simples para abrir/fechar menu hambúrguer
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");
const linkButtons = document.querySelectorAll("button[data-url]");
 
 
// Adiciona um evento de clique ao botão
toggle.addEventListener("click", () => {
    links.classList.toggle("active");
});

linkButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const url = button.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank", "noopener");
        }
    });
});
 
