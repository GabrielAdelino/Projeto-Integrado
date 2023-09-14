

/*JS tela login/Cadastro */

/*const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/

/*Redirecionamento para tela cadastro*/  /*NÃO MEXER*/
document.getElementById("signUp").addEventListener("click", function() {
    window.location.href = "paginaCadastro2.html";
});

/*Realizar os ajustes finais */

/*Java Script para confirmação de senha 

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

/*Fim Java Script confrimação senha */


/*JS para input senha, olhinho pra esconder a senha :) */  /*CÓDIGO FUNCIONA, NÃO MEXER */
 
/*Olho img login*/
let imgLogin = document.querySelector('.password-toggle');
let inputLogin = document.querySelector('input[name="password"]');


imgLogin.addEventListener('click', function() {
    if(inputLogin.getAttribute('type') === 'password') {
        inputLogin.setAttribute('type', 'text');
        imgLogin.src ='img.png/olho-aberto.png';
        imgLogin.alt = 'Ocultar Senha';
    } else {
        inputLogin.setAttribute('type', 'password');
        imgLogin.src = 'img.png/olho-fechado.png';
        imgLogin.alt = 'Mostrar Senha';
    }
});

/*Olho img Cadastro*/

let imgCadastro = document.querySelector('.password-toggle-cadastro');
let inputCadastro = document.querySelector('input[name="password1"]');


imgCadastro.addEventListener('click', function() {
    if(inputCadastro.getAttribute('type') === 'password') {
        inputCadastro.setAttribute('type', 'text');
        imgCadastro.src ='img.png/olho-aberto.png';
        imgCadastro.alt = 'Ocultar Senha';
    } else {
        inputCadastro.setAttribute('type', 'password');
        imgCadastro.src = 'img.png/olho-fechado.png';
        imgCadastro.alt = 'Mostrar Senha';
    }
}); 
 
