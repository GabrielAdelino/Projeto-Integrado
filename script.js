

/*Realizar os ajustes finais */

/*Java Script para confirmação de senha */

const form = document.getElementById("form");
const senha = document.getElementById("senha");
const confirmSenha = document.getElementById("confirm-senha");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkPassword();
});

function setErrorFor(input, message) {
    const formControl = input.parentElement; // Obtém o elemento pai da entrada
    const small = formControl.querySelector('small'); // Obtém o elemento <small> para mensagens de erro

    // Adiciona a classe de erro à div de controle
    formControl.className = 'input-box error';

    // Define a mensagem de erro
    small.innerText = message;
}

function SetSuccessFor(input){

    const formControl = input.parentElement; // Obtém o elemento pai da entrada
    formControl.classList.remove('error');
    formControl.classList.add('success');
    //formControl.className = 'input-box success';

    const small = formControl.querySelector('small');
    small.innerText = '';
}

function checkPassword() {

    const senhaValue = senha.value.trim();
    const confirmSenhaValue = confirmSenha.value.trim();

    
   
    if (senhaValue !== confirmSenhaValue) {
        setErrorFor(confirmSenha, "Senhas não são iguais");
    } else {
        SetSuccessFor(confirmSenha);
    }
}

