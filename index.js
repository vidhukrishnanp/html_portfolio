

var randomNumber1 =Math.floor(Math.random()*6)+1;
var imageNo="./dice"+randomNumber1+".png";

var randomNumber2 =Math.floor(Math.random()*6)+1;
var imageNo2="./dice"+randomNumber2+".png";
  
if (randomNumber1>randomNumber2)
{
   
    var result1=document.querySelector("h1").innerHTML="player 1 wins 🫅🏼 ";
    
   
}
else if(randomNumber1<randomNumber2)
{
    var result2=document.querySelector("h1").innerHTML="player 2 wins!  🤴🏼  ";;
    
    
}
else{
    var result3=document.querySelector("h1").innerHTML="DRAW   🤜🏼🤛🏼";;
    
}




var imagee=document.querySelectorAll("img")[0];
imagee.setAttribute("src" , imageNo)

var imagee=document.querySelectorAll("img")[1];
imagee.setAttribute("src" , imageNo2)

