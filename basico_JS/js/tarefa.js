const inputTarefas = document.getElementById('inputTarefas');
const tarefasInseridas = document.getElementById('tarefasInseridas');

/*
<i class="bi bi-circle"></i>
<i class="bi bi-checked2-circle"></i>
*/
function adicionarTarefa(){
    if(inputTarefas.value == ''){
        alert("Insira alguma tarefa, campo não pode ser vazio");
    }else{
      let criarItemDaLista = document.createElement('li');
       let criarIcone = document.createElement('i');
       let criarParagrafo = document.createElement('p');
       
       criarIcone.classList.add('bi', 'bi-circle', 'fs-6', 'circulo');

       criarItemDaLista.appendChild(criarIcone);

       criarParagrafo.innerHTML = inputTarefas.value;

       criarItemDaLista.appendChild(criarParagrafo);

       criarItemDaLista.classList.add("list-group-item");

       tarefasInseridas.appendChild(criarItemDaLista);

       let span = document.createElement('span');
       span.innerHTML = "\u00d7";

       criarItemDaLista.appendChild(span);
       
    }

    inputTarefas.value = '';
}