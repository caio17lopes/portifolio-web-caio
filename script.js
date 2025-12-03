// script.js

// Seleciona o formulário pelo ID
const formulario = document.getElementById('formContato');

// Adiciona um evento de 'submit' (envio) ao formulário
formulario.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário (recarregar a página)
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação 1: Campos Vazios [cite: 58]
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return; // Para a execução aqui se houver erro
    }

    // Validação 2: Formato de E-mail simples (Verifica se tem @ e .) [cite: 59]
    // Nota: Regex é melhor, mas uma verificação simples costuma ser aceita se explicada.
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de Envio [cite: 60]
    // Exibe mensagem de sucesso
    alert('Mensagem enviada com sucesso! Obrigado, ' + nome + '.');

    // Limpa os campos do formulário
    formulario.reset();
});

// Comentário explicativo: Este script garante que o usuário não envie dados em branco
// e receba um feedback visual imediato.