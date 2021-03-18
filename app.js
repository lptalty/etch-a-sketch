//cache the DOM for all of the HTML elements
const body = document.body
const container = document.createElement("div")
container.setAttribute("class", "container")
const header = document.createElement("div")
header.setAttribute("id", "header")
header.innerText = 'Etch-a-Sketch'
body.append(header)
const buttonContainer = document.createElement("div")
buttonContainer.setAttribute("class", "buttonContainer")
body.append(buttonContainer)

//make the four buttons that will fit inside buttonContainer
const blackBtn = document.createElement("button")
blackBtn.setAttribute("id", "blackBtn")
blackBtn.innerText = 'Black'
buttonContainer.append(blackBtn)

const colorBtn = document.createElement("button")
colorBtn.setAttribute("id", "colorBtn")
colorBtn.innerText = 'Color'
buttonContainer.append(colorBtn)

const eraseBtn = document.createElement("button")
eraseBtn.setAttribute("id", "eraseBtn")
eraseBtn.innerText = 'Erase'
buttonContainer.append(eraseBtn)

const resetBtn = document.createElement("button")
resetBtn.setAttribute("id", "resetBtn")
resetBtn.innerText = 'Reset'
buttonContainer.append(resetBtn)

//for first invocation of gridSize function, store the user result within UserInput variable
const userInput = prompt('What size grid do you want?')

//this function creates the size of the grid to be sketched on, depending on the number
//the user picks between 2 and 64
function gridSize(num){

//if the original value given by the user is within the correct range
if(num >= 2 && num <=64){
//create square grid based on the argument assigned to the parameter num
for(x = 0; x < num; x++){
    for(let y = 0; y < num; y++){
        const boxDiv = document.createElement("div")
        boxDiv.setAttribute("class", "boxDiv")
        container.append(boxDiv)
    }
    }   
//add container id to body so that it can be manipulated using the DOM
//style the container grid, ensuring the number of rows and columns is equal to the argument value
    body.append(container)
    document.querySelector(".container").style.gridTemplateColumns = `repeat(${num}, 1fr)`

//else reprompt the user for a new number that is inbetween the correct range
} else {

    //reprompt user for new argument value that fits within the range
    let updatedInput = prompt('Please choose a number between 2 and 64')

    //invoke the gridSize function again with the correct argument value
    gridSize(updatedInput)
}



}

//invoke the function gridSize with the variable userInput
gridSize(userInput)

//variable that determines what color the boxes change
//the value is set by the button the user clicks on
let currentColor = undefined;

//create variables that the user can manipulate with event listeners
const blackClick = buttonContainer.querySelector("#blackBtn")
const colorClick = buttonContainer.querySelector("#colorBtn")
const eraseClick = buttonContainer.querySelector("#eraseBtn")
const resetClick = buttonContainer.querySelector("#resetBtn")

blackClick.addEventListener('click', function(){
    currentColor = ["black"]
})

colorClick.addEventListener('click', function(){
    currentColor = ['#c1faff', '#b2eaff', '#a2c9ff', '#d2afff', '#d496ff'];
})

eraseClick.addEventListener('click', function(){
    currentColor = ["white"]
})

resetClick.addEventListener('click', function(){
    location.reload();
})

//create variable that will hold all of the box divs within an array
const myDivs = container.getElementsByClassName("boxDiv")

//attaching event listeners onto every item under class name boxDiv using a for of loop
//this is iterating through the array that is created in myDivs
for(let div of myDivs){
    div.addEventListener('mouseover', function(){
        div.style.backgroundColor = currentColor[Math.floor(Math.random() * currentColor.length)];
    })
}


