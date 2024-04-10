var rn1=Math.floor(Math.random()*6)+1;
var new_img1="dice"+rn1+".png";
var new_img1_src="images/"+new_img1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",new_img1_src);


var rn2=Math.floor(Math.random()*6)+1;
var new_img2="dice"+rn2+".png";
var new_img2_src="images/"+new_img2;
var img2=document.querySelectorAll("img")[1]
img2.setAttribute("src",new_img2_src);

if(rn1>rn2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML="Player2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
