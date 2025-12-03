// script.js

// --- PARTE 1: FORMULÁRIO ---
const formulario = document.getElementById('formContato');

// Só adiciona o evento se o formulário existir na página
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validação
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Sucesso
        alert('Mensagem enviada com sucesso! Obrigado, ' + nome + '.');
        formulario.reset();
    });
}

// --- PARTE 2: TEMA CLARO/ESCURO ---
const btnTema = document.getElementById('btnTema');
const body = document.body;

// Proteção: Só tenta adicionar o clique se o botão realmente existir
if (btnTema) {
    btnTema.addEventListener('click', function() {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            btnTema.textContent = '🌙'; 
        } else {
            btnTema.textContent = '☀️'; 
        }
    });
}