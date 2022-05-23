const FirstPlayerRandom = Math.floor(Math.random() *6)+1;
const imageFirstPlayer = 'assets/dice' + FirstPlayerRandom + '.png';
document.getElementById('img1').setAttribute('src', imageFirstPlayer)


const SecondPlayerRandom = Math.floor(Math.random() *6)+1;
const imageSecondPlayer = 'assets/dice' + SecondPlayerRandom + '.png';
document.getElementById('img2').setAttribute('src', imageSecondPlayer)


if (FirstPlayerRandom > SecondPlayerRandom){
    document.getElementById('id').innerHTML = "&#128681" +"Player One wins!"
}
else if (FirstPlayerRandom < SecondPlayerRandom){
    document.getElementById('id').innerHTML = "&#128681" +"Player Two wins!"

}
else{
    document.getElementById('id').innerHTML = "Draw!"

}




