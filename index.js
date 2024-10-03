var randomNumber1=Math.floor((Math.random() *6)+1);
var randimg1="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg1);

var randomNumber2=Math.floor((Math.random() *6)+1);
var randimg2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randimg2);


if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="DRAW!!";
}

else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player1 WIN!!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 WIN!!";
}