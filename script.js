let NomeTitular = document.getElementById("nome");
NomeTitular.style.color = "black";
NomeTitular.innerText = "Lucas Sampaio";
let botaoSobre = document.getElementById("botaoSobre");
let sobreMim = document.getElementById("sobreMim");
sobreMim.style.display = "none"


botaoSobre.addEventListener("click", function(){
    
    if (sobreMim.style.display === "none") {
        sobreMim.style.display = "flex"
        botaoSobre.innerText = "Ocultar sobre mim"
    } 
    else {
        sobreMim.style.display = "none"
        botaoSobre.innerText = "Sobre Mim"
    }
});

