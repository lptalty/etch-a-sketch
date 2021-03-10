const body = document.body
const boxDiv = document.createElement("div")
boxDiv.setAttribute("id", "boxDiv")
boxDiv.innerText = 'working'

const container = document.createElement("div")
container.setAttribute("id", "container")


container.append(boxDiv)
body.append(container)