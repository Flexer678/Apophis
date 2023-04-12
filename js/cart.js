



let cartbtn = document.querySelector(".cart")
let cartnum = document.querySelector(".cartNum")//the number on the cart



//localStorage.setItem('cart', myCart);
//cartnum.innerHTML = Object.keys(myCart).length




//console.log(typeof(JSON.parse(sessionStorage.getItem("cart"))))


//bodyq.style.background = "red"
//console.log("dd", bodyq.innerHTML)




function BuyItem(item){
   
}



function addCart(element){
    console.log(typeof(element))
    
    //console.log(data)
    //data.push(JSON.parse(element))
    //data = data;
    //sessionStorage.setItem("cart", "")
    if (sessionStorage.getItem("cart") == "null"){
        sessionStorage.setItem("cart","")
    }
    sessionStorage.setItem("cart", sessionStorage.getItem("cart")+ element);
    //console.log("mycart",myCart)
    console.log("string", (sessionStorage.getItem("cart")))
    //let data = JSON.parse(sessionStorage.getItem("cart"))
    //console.log("hello",data.subStr(0, 569))
    //console.log("parsed", JSON.parse(data))
   
    
    
}

/*
let display = document.querySelector(".cart-items")
display.innerHTML = sessionStorage.getItem("cart")
display.style.color = "bllack"

*/


//console.log(sessionStorage.getItem("cart"))

//https://formsubmit.co/el/kigizi

export{addCart}