//import { object } from "firebase-functions/v1/storage";
let bodyq = document.querySelector(".body-style")
let cartbtn = document.querySelector(".cart")
let cartnum = document.querySelector(".cartNum")//the number on the cart


let myCart = []
let cart = window.localStorage.getItem("cart")
window.localStorage.setItem('cart', JSON.stringify(myCart));
//localStorage.setItem('cart', myCart);
//cartnum.innerHTML = Object.keys(myCart).length

/*
cartbtn.addEventListener("click",()=>{
    window.location.href = "./cart.html"
   

})
*/

//bodyq.style.background = "red"
//console.log("dd", bodyq.innerHTML)



function BuyItem(item){
   
}



function addCart(element){
    
    alert(element)
    myCart.push(JSON.parse(element))
    window.localStorage.setItem('cart', JSON.stringify(myCart));
    console.log("mycart",myCart)
    console.log("localstorgae", JSON.parse(window.localStorage.getItem("cart")) )
    
    //cartnum.innerHTML = object.keys(localStorage.getItem("cart")).length
    
}



export{addCart}