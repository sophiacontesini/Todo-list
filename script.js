
// 5. Texto digitado no input deve aparecer na lista e desaparecer do input
// 6. Ordenar os itens por ordem de criação
// Itens criados devem permanecer na lista na medida em que novos são adicionados
// Recebi ajuda da Débora Serra- Turma 19-tribo B

let lista = document.querySelector('ol');
let botao = document.querySelector ('#criar-tarefa');
let input = document.querySelector ('input');
let botaoApaga = document.querySelector('#apaga-tudo');
let botaoRemove = document.querySelector('#remover-finalizados');

botao.addEventListener("click", criaClick);
  function criaClick() {
    let criaLista = document.createElement ("li");
    let valor = input.value;
    criaLista.innerText = valor;
    lista.appendChild(criaLista);
    input.value = '';
    criaLista.addEventListener('click', changeColor);
    criaLista.addEventListener('dblclick', riscaItem);
  
  }
  
//7. Alterar a cor de fundo para cinza
//8. Não selecionar mais de um elemento ao mesmo tempo
// Recebi ajuda da Débora Serra- Turma 19-tribo B

function changeColor(e) {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i+=1) {
    list[i].style.backgroundColor = "#d2691e";
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9. Ao clicar duas vezes em um item: riscá-lo
// Desfazer essa acao ao clicar duas vezes novamente no item
// toggle remove e adiciona parametros na classe.
// Recebi ajuda da Débora Serra- Turma 19-tribo B
function riscaItem(e) {
e.target.classList.toggle('completed');
}

//10. Adicionar botao com id= "apaga-tudo" 
// Recebi ajuda da Débora Serra - Turma 19-tribo B
botaoApaga.addEventListener('click', apagaTudo);
function apagaTudo(){
  let itensLista = document.querySelectorAll('li');
  for(let i=0; i < itensLista.length; i+=1){
   lista.removeChild(itensLista[i])
  }
}


//11.  Adicionar botao com id= "remover-finalizados"
// Recebi ajuda da Débora Serra - Turma 19-tribo B
botaoRemove.addEventListener('click', removeItem);
function removeItem(){

}