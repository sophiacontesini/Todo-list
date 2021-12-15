
// 5. Texto digitado no input deve aparecer na lista e desaparecer do input
// 6. Ordenar os itens por ordem de criação
// Itens criados devem permanecer na lista na medida em que novos são adicionados
// Recebi ajuda da Débora Serra- Turma 19-tribo B

let lista = document.querySelector("ol");
let botao = document.querySelector ("#criar-tarefa");
let input = document.querySelector ("input")

botao.addEventListener("click", criaClick);
  function criaClick() {
    let criaLista = document.createElement ("li");
    let valor = input.value;
    criaLista.innerText = valor;
    lista.appendChild(criaLista);
    input.value = '';
    criaLista.addEventListener('click', changeColor);
  }

//7. Alterar a cor de fundo para cinza
// 8. Não selecionar mais de um elemento ao mesmo tempo
// texto.addEventListener ("click", corFundo); Evento de click adicionado na função anterior

function changeColor(e) {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i+=1) {
    list[i].style.backgroundColor = "#d2691e";
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9. Ao clicar duas vezes em um item: riscá-lo
// Desfazer essa acao ao clicar duas vezes novamente no item





//10. Adicionar botao com id= "apaga-tudo" 

//11.  Adicionar botao com id= "remover-finalizados"






