var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.background = colors[i];
    } else {
        squares[i].style.display="none";
     }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        
        squares[i].style.background = colors[i];
        squares[i].style.display="block";
     
    }
})

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent="new colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    
  })

colorDisplay.textContent=pickedColor;

for(var i=0; i < squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var clickColor = this.style.backgroundColor;
        if (clickColor===pickedColor){
            messageDisplay.textContent = "correct!";
            messageDisplay.style.color="steelblue";
            resetButton.textContent="play again";
            changeColors(clickColor);
            h1.style.backgroundColor = pickedColor;
        }else{
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "try again";
          
        }
       
    })
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
   var random =  Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num;i++){
        arr.push(RandomColor());
    }
    return arr;
}

function RandomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b +")";
    
}


