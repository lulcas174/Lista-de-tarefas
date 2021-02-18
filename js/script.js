const elementoLista = document.getElementById('primeira-lista');
const elementoInput = document.getElementById('input-tarefas');
const elementoBotao = document.getElementById('botao-adicionar');

const tarefas = []

function mostrarTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);
        const elementoLink = document.createElement('a')//a é um elemento reservado de link no HTML, por isso o X vai funcionar como botao
        const pos = tarefas.indexOf(tarefa)//Responsável por procurar o index no array 
        const linkText = document.createTextNode('X')

        elementoLink.appendChild(linkText)
        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)
        elementoLista.appendChild(elementoTarefa) //o elemento tarefa alimenta o ul (elemento lista)
        elementoTarefa.appendChild(textoTarefa) // adicionando texto dentro de um elemento
        elementoTarefa.appendChild(elementoLink) //adicionando x um por um, nos elementos de li       
        
    }
}

mostrarTarefas()

function adicionarTarefa() {
    const addTarefa = elementoInput.value
    tarefas.push(addTarefa)
    mostrarTarefas()
    
}

elementoBotao.setAttribute('onclick', 'adicionarTarefa()')
function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostrarTarefas()
}

function verificarBotao(){
    if(elementoInput.value=""){
       console.log("ADHASUDHAS")
    }
    
}

