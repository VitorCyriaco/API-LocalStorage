const openBtn = document.getElementById("buttonAdd"); //botão para abrir o modal
const closeBtn = document.querySelector(".closeBtn"); //botão "X" para fechar o modal
const modal = document.getElementById("addTaskModal"); //botão de salvar os dados dos inputs
const filterButtons = document.querySelectorAll('.buttonFilter'); //botões de filtro

openBtn.onclick = () => modal.style.display = "block"; //função para abrir o model alterando o style

//função para fechar o modal
closeBtn.onclick = () => {
    modal.style.display = "none";

    // Limpar valores dos inputs
    const inputs = modal.querySelectorAll("input[type='text'], input[type='date']");
    console.log(inputs)
    inputs.forEach(input => {
        input.value = "";
    })

    // Limpar o select de prioridade
    document.getElementById("taskPriority").value = "";
};

//Cria uma máscara no input de data para o formato dd/mm/aaaa
window.addEventListener("DOMContentLoaded", () => {
    const inputData = document.getElementById("taskWhen");

    if (inputData) {
        IMask(inputData, {
            mask: '00/00/0000'
        });
    }
});

//Função para tornar os botões de filtro clicáveis e adicionar a classe 'selected' ao botão clicado
filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove a classe 'selected' de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Adiciona a classe 'selected' apenas no botão clicado
        button.classList.add('selected');
    });
});