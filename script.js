// Script simples para abrir/fechar menu hambúrguer
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");
 
 
// Adiciona um evento de clique ao botão
toggle.addEventListener("click", () => {
    links.classList.toggle("active");
});
 