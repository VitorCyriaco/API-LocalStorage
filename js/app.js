const openBtn = document.getElementById("buttonAdd"); //botão para abrir o modal
const closeBtn = document.querySelector(".closeBtn"); //botão "X" para fechar o modal
const modal = document.getElementById("addTaskModal"); //botão de salvar os dados dos inputs

openBtn.onclick = () => modal.style.display = "block"; //função para abrir o model alterando o style
closeBtn.onclick = () => modal.style.display = "none"; //função para fechar o modal
