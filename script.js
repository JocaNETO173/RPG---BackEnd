function lutar(){
    const classe = document.getElementById('classes').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');
    const nome = document.getElementById('nome').value;

    if(!arma || !classe){
        log.innerHTML = "Você esqueceu de selecionar algo!";
        return;
    };
    
    const numRand = Math.floor((Math.random() * 20)+1);



    let resultado  = `<strong>${nome}</strong> O <strong>${classe}</strong> com <strong>${arma}</strong>`
    const valorDado = document.getElementById('valor-dado');
    if(numRand === 20){
        valorDado.classList.add('critico');

    } else {
        valorDado.classList.remove('critico');
    }
    valorDado.innerText = numRand

}