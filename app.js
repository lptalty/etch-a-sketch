const body = document.body
//const boxDiv = document.createElement("div")
//boxDiv.setAttribute("id", "boxDiv")
//boxDiv.innerText = 'working'

const container = document.createElement("div")
container.setAttribute("id", "container")

//whatever x and y are is the number that needs to be repeated within css
//this will eventually be whatever amount the user decides to input
//I could this with a button or have them actually write out a number
//i think that having three buttons for different grids may be optimal because they may not put in perfect squares
for(x = 0; x < 16; x++){
    for(let y = 0; y < 16; y++){
        const boxDiv = document.createElement("div")
        boxDiv.setAttribute("id", "boxDiv")
        boxDiv.innerText = 'w'
        container.append(boxDiv)
    }
}



//container.append(boxDiv)
body.append(container)