let numRand = Math.floor((Math.random() * 20)+1);
// let numRand = 20;



let valorDado = document.getElementById('valor-dado');
if(numRand === 20){
    valorDado.classList.add = 'critico';
}
valorDado.innerText = numRand

// 