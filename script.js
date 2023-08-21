var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
 menuItem.forEach((item)=>
  item.classList.remove('ativo')
 )
 this.classList.add('ativo')
}

menuItem.forEach((item)=>
 item.addEventListener('click', selectLink)
)

/*JS tela login/Cadastro */

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

/*JS para input senha, olhinho pra esconder a senha :) */ 
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
 