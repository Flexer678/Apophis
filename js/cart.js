//import { object } from "firebase-functions/v1/storage";
let display = document.querySelector(".cartitems")
let cartbtn = document.querySelector(".cart")
let cartnum = document.querySelector(".cartNum")//the number on the cart
let cartIcon = document.querySelector(".cartIcon")

let myCart = []
let cart = sessionStorage.getItem("cart")
sessionStorage.setItem('cart', JSON.stringify(myCart));
//localStorage.setItem('cart', myCart);
//cartnum.innerHTML = Object.keys(myCart).length


cartIcon.addEventListener("click",()=>{
    window.location.href = "./cart.html"
   

})

window.addEventListener("load",(event)=>{
    alert(window.location.href)
    if (window.location.href == "cart.html"){
    display.innerHTML = JSON.parse(sessionStorage.getItem("cart"))
    }
})



//bodyq.style.background = "red"
//console.log("dd", bodyq.innerHTML)




function BuyItem(item){
   
}



function addCart(element){
    alert(element)
    myCart.push(JSON.parse(element))
    sessionStorage.setItem('cart', JSON.stringify(cart.push(element)));
    console.log("mycart",myCart)
    console.log("localstorgae", JSON.parse(sessionStorage.getItem("cart")) )
    
    //cartnum.innerHTML = object.keys(localStorage.getItem("cart")).length
    
}



export{addCart}