const body = document.body
const container = document.createElement("div")
container.setAttribute("id", "container")
const header = document.createElement("div")
header.setAttribute("id", "header")
header.innerText = 'Etch-a-Sketch'
body.append(header)

const buttonContainer = document.createElement("div")
buttonContainer.setAttribute("class", "buttonContainer")
body.append(buttonContainer)
//make the four buttons that will fit inside buttonContainer
//then each button has to have its own div or is it span? That will determine the action of the program

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

// const colorBtn = document.createElement("button")
// blackBtn.setAttribute("id", "colorBtn")

// const eraseBtn = document.createElement("button")
// blackBtn.setAttribute("id", "eraseBtn")

// const resetBtn = document.createElement("button")
// blackBtn.setAttribute("id", "resetBtn")


// buttonContainer.append(blackBtn)
// buttonContainer.append(colorBtn)
// buttonContainer.append(eraseBtn)
// buttonContainer.append(resetBtn)

//i think that this doesn't work because there is no btn black id within my html 
//const blackBtn = buttonContainer.querySelector('#btn-black')


//having these commented out for until the the header and buttons are made
//need to make a black color button, random color button, erase button, restart button
//const userInput = prompt('What size grid do you want?')

function gridSize(num){

//if the original value given by the user is within the correct range
if(num >= 2 && num <=64){
//create square grid based on the argument assigned to the parameter num
for(x = 0; x < num; x++){
    for(let y = 0; y < num; y++){
        const boxDiv = document.createElement("div")
        boxDiv.setAttribute("id", "boxDiv")
        container.append(boxDiv)
    }
    }   
//add container id to body so that it can be manipulated using the DOM
//style the container grid, ensuring the number of rows and columns is equal to the argument value
    body.append(container)
    document.querySelector("#container").style.gridTemplateColumns = `repeat(${num}, 1fr)`


//else reprompt the user for a new number that is inbetween the correct range
} else {

    //reprompt user for new argument value that fits within the range
    let updatedInput = prompt('Please choose a number between 2 and 64')

    //invoke the gridSize function again with the correct argument value
    gridSize(updatedInput)
}





}

//gridSize(userInput)
gridSize(5)



