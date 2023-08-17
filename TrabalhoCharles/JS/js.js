function result(){
    var js1 = Number(document.getElementById("js1").value);
    var js2 = Number(document.getElementById("js2").value);
    var js3 = Number(document.getElementById("js3").value);
    var jsTotal = js1 + js2 + js3
    var jsClassificacao = "Nunca Petequeiro"

    if (jsTotal > 15){
        jsClassificacao = "A pontuação maxima é 15!"
    }
    else if (jsTotal === 15){
        jsClassificacao = "Deus Da Peteca"
    }
    else if (jsTotal >= 10){
        jsClassificacao = "Petequeiro Profissa"
    }
    else if (jsTotal >= 5){
        jsClassificacao = "Petequeiro De Final De Semana"
    }
    else if (jsTotal >= 1){
        jsClassificacao = "Pseudo Petequeiro"
    }

    else if (jsTotal > 15){
        jsClassificacao = "O maximo de pontos é 15!"
    }

    else {
        jsClassificacao = "Nunca Petequeiro"
    }
    document.getElementById("r").innerHTML = jsClassificacao;
}
