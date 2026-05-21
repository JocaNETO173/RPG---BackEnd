function lutar(){
    const classe = document.getElementById('classes').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');
    const nome = document.getElementById('nome').value;

    if(!arma || !classe){
        log.innerHTML = "Você esqueceu de selecionar algo!";
        return;
    };
    
    const dado = Math.floor((Math.random() * 20)+1);



    let resultado  = `<strong>${nome}</strong>, o <strong>${classe}</strong> luta com sua arma: <strong>${arma}</strong>.<br>`
    const valorDado = document.getElementById('valor-dado');
    if(dado === 20){
        valorDado.classList.add('critico');
        resultado += "<span class='critico'>CRÍTICO</span><br>";

    } else {
        valorDado.classList.remove('critico');
    }
    valorDado.innerText = dado

    switch(classe){
        case "guerreiro":
            if(arma.toLowerCase() === "espada" && dado > 8){
                resultado += "<span class='sucesso'>SUCESSO: Você estraçalhou com um golpe de Espada.</span>"
            }else if(dado > 15){
                resultado += "<span class='sucesso'>VITÓRIA: Vitória: Você espancou seu inimigo até a morte!</span>"
            }else {
                resultado += "<span class='derrota'>DERROTA: Você falhou em sua missão e morreu.</span>"
            }
            break;
            
        case "mago":
            if(arma.toLowerCase() === "cajado" && dado > 10){
                resultado += "<span class = 'sucesso'>SUCESSO: Você EXPLODIU o inimigo com uma Bola de Fogo!</span>"
            } else if(dado === 20){
                resultado += "<span class = 'sucesso'>SUCESSO: Você, pela sorte divina de seus antepassados, com um ataque furtivo alveja seu inimigo, mesmo sem seu cajado!</span>"
            } else {
                resultado += "<span class='derrota'>DERROTA: Vocẽ desonrou seus mestres e foi morto brutalmente.</span>"
            }
            break;
        case "arqueiro":
            if(arma.toLowerCase() === "arco" && dado > 9){
                resultado += "<span class='sucesso'>SUCESSO: Você deu um tiro certeiro na cabeça do inimigo!</span>"
            } else if (dado > 17) {
                resultado += "<span class='sucesso'>SUCESSO: Você conseguiu calcular a trajetória e força do vento a seu favor para acertar a cabeça do seu inimigo com sua arma não convencional, lhe garantindo uma vitória surpreendente!!</span>"
            } else {
                resultado += "<span class='derrota'>DERROTA: Você deixou o inimigo se aproximar de mais, você ficou encurralado e morreu!</span>"
            }
            break;
        default: 
            resultado += 'Aguardando Desafiante...';
            break;
    }
    log.innerHTML = resultado;
}
