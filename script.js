const entradaTarefa = document.getElementById('entradaTarefa');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    console.log(entradaTarefa.value);
    localStorage.setItem("tarefa1", entradaTarefa.value);
    //listaTarefas.value = entradaTarefa.value;
}