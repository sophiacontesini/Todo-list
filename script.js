// 5. Texto digitado no input deve aparecer na lista e desaparecer do input
// 6. Ordenar os itens por ordem de criação
// Itens criados devem permanecer na lista na medida em que novos são adicionados
// Recebi ajuda da Débora Serra e da Anjel Diniz - Turma 19-tribo B

const lista = document.querySelector('ol');
const botao = document.querySelector('#criar-tarefa');
const input = document.querySelector('input');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoRemove = document.querySelector('#remover-finalizados');

// eslint-disable-next-line no-use-before-define
botao.addEventListener('click', criaClick);
function criaClick() {
  const criaLista = document.createElement('li');
  // eslint-disable-next-line no-undef
  criaLista.innerText = valor;
  lista.appendChild(criaLista);
  input.value = '';
  // eslint-disable-next-line no-use-before-define
  criaLista.addEventListener('click', changeColor);
  // eslint-disable-next-line no-use-before-define
  criaLista.addEventListener('dblclick', riscaItem);
}

// 7. Alterar a cor de fundo para cinza
// 8. Não selecionar mais de um elemento ao mesmo tempo
// Recebi ajuda da Débora Serra e da Anjel Diniz - Turma 19-tribo B

function changeColor(e) {
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    list[i].style.backgroundColor = '#d2691e';
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9. Ao clicar duas vezes em um item: riscá-lo
// Desfazer essa acao ao clicar duas vezes novamente no item
// toggle remove e adiciona parametros na classe.
// Recebi ajuda da Débora Serra e da Anjel Diniz - Turma 19-tribo B
function riscaItem(e) {
  e.target.classList.toggle('completed');
}

// 10. Adicionar botao com id= "apaga-tudo"
// Recebi ajuda da Débora Serra e da Anjel Diniz - Turma 19-tribo B
// eslint-disable-next-line no-use-before-define
botaoApaga.addEventListener('click', apagaTudo);
function apagaTudo() {
  const itensLista = document.querySelectorAll('li');
  for (let i = 0; i < itensLista.length; i += 1) {
    lista.removeChild(itensLista[i]);
  }
}

// 11.  Adicionar botao com id= "remover-finalizados"
// Recebi ajuda da Débora Serra e da Anjel Diniz - Turma 19-tribo B
// eslint-disable-next-line no-use-before-define
botaoRemove.addEventListener('click', removeItem);
function removeItem() {
  const itensLista = document.querySelectorAll('li');
  for (let i = 0; i < itensLista.length; i += 1) {
    if (itensLista[i].classList.contains('completed')) {
      lista.removeChild(itensLista[i]);
    }
  }
}
