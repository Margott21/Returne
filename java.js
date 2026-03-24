function abrirPlayer(url) {
  // 1. Captura o modal e o iframe
  const modal = document.getElementById('modalPlayer');
  const iframe = document.getElementById('videoFrame');

  // 2. Coloca o link do vídeo no iframe
  iframe.src = url;

  // 3. Muda o CSS de 'none' para 'flex' para ele aparecer
  modal.style.display = 'flex';
}

function fecharPlayer() {
  const modal = document.getElementById('modalPlayer');
  const iframe = document.getElementById('videoFrame');

  // 4. Esconde o modal e limpa o link (para o som parar de tocar)
  modal.style.display = 'none';
  iframe.src = "";
}
