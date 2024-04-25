

function toggleOpcoesAluguel() {
    var opcoesAluguel = document.getElementById('opcoesAluguel');
    var alugarVeiculosButton = document.getElementById('alugarVeiculosButton');
    var body = document.body;

    if (opcoesAluguel.classList.contains('active')) {
        opcoesAluguel.classList.remove('active');
        body.style.overflowY = 'auto';
        alugarVeiculosButton.style.display = 'block';
    } else {
        opcoesAluguel.classList.add('active');
        body.style.overflowY = 'hidden';
        alugarVeiculosButton.style.display = 'none';
        opcoesAluguel.style.top = '0'; // Coloca o retângulo no topo da página ao exibi-lo
    }
}

function continuarAluguel() {
    alert('AGUARDE ENQUANTO CARREGAMOS SUAS INFORMAÇÕES...');
}

// Verifica quando o usuário rola a página e oculta o retângulo se necessário
window.addEventListener('scroll', function() {
    var retangulo = document.getElementById('retangulo');
    if (window.scrollY > 0) {
        retangulo.style.display = 'none';
    }
});

function mostrarTexto(idTexto, event) {
    event.preventDefault();
    var texto = document.getElementById(idTexto);
    if (texto.style.display === 'none') {
      texto.style.display = 'block';
    } else {
      texto.style.display = 'none';
    }
  }