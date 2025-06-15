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
