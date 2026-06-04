let NomeTitular = document.getElementById("nome");
NomeTitular.style.color = "black";
NomeTitular.innerText = "Lucas Sampaio";
let botaoMudar = document.getElementById("botaoNome");
let botaoEsconderTec = document.getElementById("botaoTecnologias");
let listaTec = document.getElementById("listaTecnologias")
listaTec.style.display = "none"

botaoMudar.addEventListener("click", function(){
    if (NomeTitular.style.color === "black") {
        NomeTitular.innerText = "Lucas";
        NomeTitular.style.color = "red";
    } 
    else {
        NomeTitular.innerText = "Lucas Sampaio";
        NomeTitular.style.color = "black";
    }
    console.log(NomeTitular.style.color);
});

botaoEsconderTec.addEventListener("click", function(){
    if (listaTec.style.display === "none") {
        listaTec.style.display = "block" 
    }
    else {
        listaTec.style.display = "none"
    }
});