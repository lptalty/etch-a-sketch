const body = document.body

const container = document.createElement("div")
container.setAttribute("id", "container")


//let user input = input number
let userInput = prompt('What size grid do you want?')
//x and y are less than user input

if(userInput >= 4 && userInput <=25){
    //user input has to be in between 2 and 25(? not sure how high the upper limit should be)
//whatever x and y are is the number that needs to be repeated within css
//this will eventually be whatever amount the user decides to input
for(x = 0; x < userInput; x++){
    for(let y = 0; y < userInput; y++){
        const boxDiv = document.createElement("div")
        boxDiv.setAttribute("id", "boxDiv")
        //boxDiv.innerText = 'w'
        container.append(boxDiv)
    }
}
}

body.append(container)

//const changeContainer = document.querySelector("#container").style.width = "300px"
//changeContainer.style.width = 200px
//console.log(changeContainer)

document.querySelector("#container").style.gridTemplateColumns = `repeat(${userInput}, 1fr)`



// let gridSize = document.querySelector('container')
// gridSize.style.gridTemplateColumns = repeat(userInput, 1fr);

