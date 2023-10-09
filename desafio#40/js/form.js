document.addEventListener('DOMContentLoaded', function() {
    // Selecione o formulário e o botão pelo ID
    const form = document.getElementById('newsletter-form');
    const button = document.getElementById('button');

    // Adicione um evento de clique ao botão
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede que o formulário seja enviado 
        // Limpe o campo de e-mail e reinicie a página
        const emailInput = document.getElementById('email');
        emailInput.value = '';
        location.reload();
    });
});
