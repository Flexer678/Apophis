import { random } from "./main.js";

const items = document.querySelector(".items")
//element to center the div
const centerContainer = document.createElement("div")
centerContainer.className = "centerContainer"

let text = document.createElement("h1")
text.innerHTML = "Some other items"


items.append(text,centerContainer)



//random(container its stored in,
//cssNumber,
//number of times you want to run it,
//description constraints
//title constraints

random(centerContainer, 2, 8.4,10 ,20)