var color =[];
var counter=0;
var square = document.querySelectorAll(".square");

var clk = document.querySelector("#bar ul > li");

clk.addEventListener("click",function(){
    location.reload();
})


for(var i=0; i<square.length; i++) {
var x = Math.round((255*(Math.random())));
var y = Math.round((255*(Math.random())));
var z = Math.round((255*(Math.random())));

color.push("rgb("+x+", "+y+", "+z+")");    
      
}

var selectedColor = color[(Math.round(((square.length-1)*(Math.random()))))];
document.getElementById("color").innerHTML= selectedColor;




for(var i=0;i < square.length; i++){
    square[i].style.background = color[i];
    
    square[i].addEventListener("click",function(){
        counter++;
        var colorPicked = this.style.background;
        
        if(colorPicked === selectedColor){
          
            if(counter < square.length) {
            this.style.pointerEvents="none";    
            document.querySelector("#newgame").innerHTML="Play Again ?";
            document.querySelector("#show").textContent="Correct !";
            for(var i=0;i<square.length;i++){
                square[i].style.background=this.style.background;
                document.querySelector("#header").style.background=this.style.background;
                square[i].style.pointerEvents="none";
                
            }
                }
            else if(counter >= square.length) {
                 this.style.pointerEvents="none";
                 document.querySelector("#show").textContent="Ofcourse !";
            }
        }
        else {
            if(counter===(square.length-1)){
                document.querySelector("#show").textContent="You Lost!"; 
                document.querySelector("#newgame").innerHTML="Play Again ?";
                this.style.pointerEvents="none";
            }
            else {
                this.style.background="#262626"; 
                this.style.pointerEvents="none";
            }
              
        };
    });
}





