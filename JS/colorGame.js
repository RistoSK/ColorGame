var numOfBoxxes = 6;
var colors = [];
var pickedColor;
var boxs = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupBoxxes();
    reset();
}

// Toggle the selected effect from the buttons
function setupModeButtons()
{
    for(var i=0; i < modeButtons.length; i++)
    {
            modeButtons[i].addEventListener("click", function()
            {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                //Make the two different skill levels
                if(this.textContent === "Easy")
                {
                    numOfBoxxes = 3;
                }
                else
                {
                    numOfBoxxes = 6;
                }
                reset();
            });
    }
}

//make boxxes disapear when wrongly clicked
function setupBoxxes()
{
   for (var i = 0; i < boxs.length; i++)
   {
            boxs[i].addEventListener("click", function()
            {
                var clickedColor = this.style.background;
                      
                      if(clickedColor === pickedColor)
                      {
                          messageDisplay.textContent = "Correct";
                          changeColors(clickedColor);
                          h1.style.backgroundColor = pickedColor;
                          resetButton.textContent = "Play again"
                      }
                      else
                      {
                          this.style.background = "#1a1a1a"; 
                          messageDisplay.textContent = "Try Again";    
                      }
            });
    }
    reset();
}

//reset the whole page
function reset()
{
    colors = generateRandomColor(numOfBoxxes);
    //picks a new random color from the array
    pickedColor = pickColor();
    //changes the color displayed to match the picked color
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    colorDisplay.textContent = pickedColor;
        
    //change the colors on the boxxes
    for(var i=0; i< boxs.length; i++)
    {
        if(colors[i])
        {
            boxs[i].style.display = "block";
            boxs[i].style.background = colors[i]; 
        }
        else
        {
            boxs[i].style.display = "none";
        }
                
    }
    h1.style.backgroundColor = "steelblue";  
}
    
resetButton.addEventListener("click", function()
{
    reset();
})

//changes all the colors in the boxxes
function changeColors(color)
{
    for(var i=0; i< boxs.length; i++)
    {
        //change each color to match given color
        boxs[i].style.background = color; 
    }    
}

//picks a color that will be the one we are searching for
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate random colors to all the boxxes
function generateRandomColor(num)
{
    var myArray = [];
    for(var i = 0; i<num; i++)
    {
        myArray.push(randomColor())   
    }
    return myArray;
}

//create the random colors
function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
