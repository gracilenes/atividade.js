function gerarTabuada(operacao){
    switch(operacao){
        case 'soma':
        alert("Vc clicou no btn de soma");
    
        for(i = 0; i < 10; i++){ // i = 0
            for(j = 0; j < 10; j++){ // j = 0 j = 1 j = 2
                document.getElementById("tabuada").innerHTML += "<br />" + i + "+" + j + "=" + (i+j);
            }
        }
        
            break;

        case 'subtracao': 
        for(i = 0; i < 10; i++){ // i = 0
            for(j = 0; j < 10; j++){ // j = 0 j = 1 j = 2
                document.getElementById("subtracao").innerHTML += "<br />" + i + "-" + j + "=" + (i-j);
            }
        }
            alert("Vc clicou no btn de subtracao");
            // ....
            break;
        
        case 'multiplicacao': 
        for(i = 0; i < 10; i++){ // i = 0
            for(j = 0; j < 10; j++){ // j = 0 j = 1 j = 2
                document.getElementById("multiplicacao").innerHTML += "<br />" + i + "*" + j + "=" + (i*j);
            }
        }
            alert("Vc clicou no btn de multiplicacao");
            //....
            break;

        case 'divisao': 
        for(i = 0; i < 10; i++){ // i = 0
            for(j = 0; j < 10; j++){ // j = 0 j = 1 j = 2
                document.getElementById("divisao").innerHTML += "<br />" + i + "/" + j + "=" + (i/j);
            }
        }
            alert("Vc clicou no btn de divisao");
            //....
            break;
    }
}
