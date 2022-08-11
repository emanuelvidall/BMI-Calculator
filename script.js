function teste(){
    var resultado = document.getElementById("resultado");
    var resultado_imc = document.getElementById("resultado_imc");
    var resultado_comment = document.getElementById("resultado_comment")
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    const imc = Math.round(peso / (Math.pow(altura, 2)));
    resultado.innerHTML = "Seu IMC é" + "<br />";
    resultado_imc.innerHTML = " " + imc;

    if (imc > 30){
        resultado_imc.style.color = 'white';
        resultado_imc.style.backgroundColor = 'red'
        resultado_comment.innerHTML = "Converse com seu médico, procure diminuir seu IMC! 👎🏼"
    }
    else{
        resultado_imc.style.color = 'white';
        resultado_imc.style.backgroundColor = 'green';
        resultado_comment.innerHTML = "Seu IMC está sob controle! 👍🏼"
    }
}


