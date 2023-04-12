
import { categoryItem } from "./main.js";
const categorybtn = document.querySelector(".dropbtn")
const dropdown = document.querySelector(".dropdown-content")
const container = document.querySelector(".allitemtype")

const categoryName = document.querySelector(".categoryName")




async function data() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        return response.json()
    } catch (e) {
        body.innerHTML = sorry.innerHTML + "\r" + e
        sheet.insertRule('body{height: 100%; display: flex; text-align: center; justify-content: center; align-items: center;}')
    }
}
const fulldata = data()
//console.log(fulldata)

/*
body.addEventListener("click", () => {
    dropdown.style.visibility = "none"
})
*/


fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => {
        
        json.forEach(element => {
            //console.log(element)
            //dropdown.style.display = "grid"
            let category = document.createElement("a")
            category.addEventListener("click",()=>{
                window.sessionStorage.setItem("categ",element )
                
                //alert(typeof(sessionStorage.getItem("categ")))
                //alert(sessionStorage.getItem("categ"))
               
                window.location.href = "./items.html"
            })

            category.innerText = element
            dropdown.append(category)
        });
    })

//Element.insertAdjacentHTML()
//Element.insertAdjacentHTML()

//work on the category dropdown

categorybtn.addEventListener("click", getCategory)

//get category
function getCategory() {
    //alert(typeof(dropdown.style.display))
    if (dropdown.style.visibility == "hidden" ){
        
        dropdown.style.visibility = "inherit"
    }else{
        //alert(dropdown)
        dropdown.style.visibility = "hidden"
    }
    
}



window.onload=()=>{
    //alert(sessionStorage.getItem("categ"))
    if(sessionStorage.getItem("categ") == ""){
        notFound()
        
    } else{
        categoryName.innerHTML =sessionStorage.getItem("categ")
        //categoryItem(category,container its stored in, cssnumber)
        categoryItem(sessionStorage.getItem("categ"), container, 2)
    }
    
}

function notFound(){
    container.innerHTML = "item not found"
    container.style.height = "100vh"
    container.style.fontSize = "20px"
    container.style.display = "flex"
    container.style.alignItems = "center"
    container.style.justifyContent = "center"
}
//assign body of category a class to differenciate it from the others

//categoryItem(category,container its stored in, cssnumber)