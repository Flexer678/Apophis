

//import { object } from "firebase-functions/v1/storage";
let display = document.querySelector(".cartitems")
let cartbtn = document.querySelector(".cart")
let cartnum = document.querySelector(".cartNum")//the number on the cart



sessionStorage.setItem('cart', JSON.stringify([]));
//localStorage.setItem('cart', myCart);
//cartnum.innerHTML = Object.keys(myCart).length




console.log(typeof(JSON.parse(sessionStorage.getItem("cart"))))


//bodyq.style.background = "red"
//console.log("dd", bodyq.innerHTML)




function BuyItem(item){
   
}



function addCart(element){
    alert(element)
    let data = JSON.stringify(element)
    //data.push(JSON.parse(element))
    //data = data;
    sessionStorage.setItem('cart', JSON.stringify(sessionStorage.getItem("cart")),data);
    //console.log("mycart",myCart)
    console.log("parsed", JSON.parse(sessionStorage.getItem("cart")))
    
    //cartnum.innerHTML = object.keys(localStorage.getItem("cart")).length
    
}


//https://formsubmit.co/el/kigizi

export{addCart}