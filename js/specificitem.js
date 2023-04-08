
let container = document.querySelector(".specificitem")






window.addEventListener("load", () => {
    //alert("kkk")
    let json = window.localStorage.getItem('viewitem')
    let parseJson = JSON.parse(json)
    item(parseJson)
    
    
} )



function item(parseJson){
    let image = document.createElement("img")
    let name = document.createElement("h1")
    let description = document.createElement("p")
    let rating = parseJson.rating.rate
    let reviews = parseJson.rating.count
    
    image.src = parseJson.image
    name.innerHTML = parseJson.title
    description.innerHTML = parseJson.description

    container.append(image, name, description)
    
}

