import { addCart } from "./cart.js"
let body = document.querySelector('body')
const boxItems = document.querySelector(".items");
let sorry = document.createElement("h1")
const categorybtn = document.querySelector(".dropbtn")
const dropdown = document.querySelector(".dropdown-content")
sorry.className = "errorTxt";
sorry.innerHTML = "sorry we are unable to fetch the data \n :(";
var sheet = window.document.styleSheets[0];





document.querySelector(".accountbtn").addEventListener("click",()=>{
  alert("no need for an account")
})





async function data(){
  try{
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
  }catch(e){
    body.innerHTML = sorry.innerHTML + "\r"+ e
    sheet.insertRule('body{height: 100%; display: flex; text-align: center; justify-content: center; align-items: center;}')
  }
}
const fulldata = data()
console.log(fulldata)










//Element.insertAdjacentHTML()
//Element.insertAdjacentHTML()

//work on the category dropdown









//buybutton


















async function categoryItem(category, container, cssNumber, titlenum) {
 
  fulldata.then(value => {
    //console.log(value)
    value.forEach(element => {
      console.log(element)
      //something happening here
    if (element.category == category) {
        let mainbox = document.createElement('div')
        let box = document.createElement('div')
        let image = document.createElement('img')
        let name = document.createElement("h1")
        let description = document.createElement("p")
        let price = document.createElement("h3")
        let buyButton = document.createElement("button")


        image.className = "Image" + cssNumber.toString()
        name.className = "name" + cssNumber.toString()
        description.className = "description" + cssNumber.toString()
        price.className = "price" + cssNumber.toString()
        box.className = "box" + cssNumber.toString()
        mainbox.className = "mainbox" + cssNumber.toString()
        buyButton.className = "buyButton" + cssNumber.toString()

       
        image.src = element.image

        let title = element.title
        if (titlenum != -1) {
          name.innerText = title.substring(0, titlenum) + "..."
        } else {
          name.innerText = title
        }
        image.title = "view " + element.title
        mainbox.title = "view " + element.title
        //console.log(name.innerText)
        //.subStr(0,-1)+ "..."
        price.innerText = "$" + element.price
        let descr = element.description
        

        //add item
        buyButton.addEventListener("click", () => {
          addCart(JSON.stringify(element))
        })

        let rating = element.rating.rate
        let count = element.rating.count

        //to check the specific item
        image.addEventListener("click", () => {
          //alert(JSON.stringify(element))
          window.localStorage.setItem('viewitem', JSON.stringify(element));
          window.location.href = "specificitem.html"
        })

        buyButton.innerHTML = "Buy"
        //console.log(element.rating.count)
        box.append(name, price, description, buyButton)
        mainbox.append(image, box)
        container.append(mainbox)
      }else{
        console.log("notfound")
      }
    })
  })

}

//category("men's clothing")

//random(container its stored in,
//cssNumber,  
//number of times you want to run it,
//description constraints
//title constraints

async function random(container, cssNum, number, descnum, titlenum) {


  for (let x = 0; x < number; x++){
    let rand = Math.floor(Math.random() * 20)
    oneItem(fulldata, container, cssNum, rand, descnum, titlenum )
  }

}



const delay = ms => new Promise(res => setTimeout(res, ms));


function multipleItems(json){
    let box = document.createElement('div')
    json.then(value => {
      value.forEach(element => {
        let image = document.createElement('img')
        let name = document.createElement("h1")
        let description = document.createElement("p")
        let price = document.createElement("h3")


        image.className = "Image"
        name.className = "name"
        description.className = "description"
        price.className = "price"


        image.src = element.image
        name.innerText = element.title
        price.innerText = element.price
        description.innerHTML = element.description
        let rating = element.rating.rate
        let count = element.rating.count
        //console.log(element.rating.count)
        boxItems.append(image, name, price, description, titlenum)


      });
    })

    
}
//rather than calling it multiple times we can load up all the data all()
//into a variable and pass  parameters that do the from there multiple functions
//runner(fulldata)


//to get one item
//oineItem(data, the container its stored in, the cssnumber, substring for description)
function oneItem(json, container,cssNumber, num, descnum,titlenum ){
  //const fulldata = data()
 
   json.then(async(element) => {
     element = element[num -1]
    let mainbox = document.createElement('div')
    let box = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement("h1")
    let description = document.createElement("p")
    let price = document.createElement("h3")
    let buyButton = document.createElement("button")


     image.className = "Image" + cssNumber.toString()
     name.className = "name" + cssNumber.toString()
     description.className = "description" + cssNumber.toString()
     price.className = "price" + cssNumber.toString()
     box.className = "box" + cssNumber.toString()
     mainbox.className = "mainbox" + cssNumber.toString()
     buyButton.className = "buyButton" + cssNumber.toString() 
     
     await delay(100);
    image.src = element.image

    let title =element.title
     if (titlenum != -1) {
       name.innerText = title.substring(0,titlenum) + "..."
     } else {
       name.innerText = title
     }
     image.title = "view " + element.title
     mainbox.title = "view " + element.title
    //console.log(name.innerText)
    //.subStr(0,-1)+ "..."
    price.innerText = "$" + element.price
    let descr =element.description
    if (descnum != -1){
      description.innerHTML = descr.substring(0,descnum)+ "..."
    }else{
      description.innerHTML = descr
    }
      
    //add item
     buyButton.addEventListener("click", ()=>{
       addCart(JSON.stringify(element))
     })
     
    let rating = element.rating.rate
    let count = element.rating.count
    
    //to check the specific item
    image.addEventListener("click", ()=>{
      //alert(JSON.stringify(element))
      window.localStorage.setItem('viewitem',JSON.stringify(element));
      window.location.href = "specificitem.html"
    })

    buyButton.innerHTML = "Buy"
    //console.log(element.rating.count)
    box.append(name, price, description, buyButton)
    mainbox.append(image, box)
    container.append(mainbox)
  })
}




export { random, categoryItem }

//random()
