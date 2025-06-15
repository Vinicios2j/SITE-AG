function toggleProjeto(element) {
  element.classList.toggle('ativo');
}

// Ativar automaticamente baseado no sistema do usuário
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}


document.getElementById('whatsappBtn').addEventListener('click', () => {
  const phoneNumber = '5511947391564'; // troca pelo número real, formato internacional (ex: 55 + DDD + número)
  const message = "Olá, gostaria de saber mais sobre seus serviços.";
const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
});

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


const imagens = [
  { src: 'imgs/residencial/residencial.png', nome: 'Projeto Residencial' },
  { src: 'imgs/residencial/residencial1.png', nome: 'Projeto Industrial' },
  { src: 'imgs/industrial/industrial.png', nome: 'Projeto industrial' },
  { src: 'imgs/industrial/industrial1.png', nome: 'Projeto industrial' }
];

let indexAtual = 0;
let intervaloTroca = setInterval(proximaImagem, 2500); // troca a cada 10s
let trocaAutomaticaAtiva = true;

const imgElemento = document.getElementById("imagem-projeto");
const nomeElemento = document.querySelector(".nome-projeto");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");

function atualizarImagem() {
  imgElemento.src = imagens[indexAtual].src;
  nomeElemento.textContent = imagens[indexAtual].nome;
}

function proximaImagem() {
  indexAtual = (indexAtual + 1) % imagens.length;
  atualizarImagem();
}

function imagemAnterior() {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  atualizarImagem();
}

function pararTrocaAutomatica() {
  if (trocaAutomaticaAtiva) {
    clearInterval(intervaloTroca);
    trocaAutomaticaAtiva = false;
  }
}

btnProximo.addEventListener("click", () => {
  proximaImagem();
  pararTrocaAutomatica();
});

btnAnterior.addEventListener("click", () => {
  imagemAnterior();
  pararTrocaAutomatica();
});
