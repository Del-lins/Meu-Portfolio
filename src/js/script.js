const btnMostarMais = document.querySelector('.btn-mostrar-projects');
const projetosInativos = document.querySelectorAll('.project:not(.ativo)');

btnMostarMais.addEventListener('click', () => {
  if (btnMostarMais.textContent === 'Mostrar Mais') {
    mostrarMaisProjetos();
    btnMostarMais.textContent = 'Mostrar Menos';
  }
  else {
    esconderProjetos();
    btnMostarMais.textContent = 'Mostrar Mais';
    }
  }
);

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
    }
  );
}

function esconderProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.remove('ativo');
    }
  );
}