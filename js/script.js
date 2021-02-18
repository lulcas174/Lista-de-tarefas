const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');

const tarefas = []

function mostrarTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);
        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode('X')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}

mostrarTarefas()

function adicionarTarefa() {
    const addTarefa = elementoInput.value
    tarefas.push(addTarefa)
    elementoInput.value = ''

    mostrarTarefas()
}

elementoBotao.setAttribute('onclick', 'adicionarTarefa()')
function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostrarTarefas()
}