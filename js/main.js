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



var Names = []

fulldata.then(value => {
  value.forEach(element => {
    Names.push(element.title)
  }
  )
}
)

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        document.querySelector(".search_suggestions").appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.querySelector(".search_inpuog"), Names);









async function categoryItem(category, container, cssNumber, titlenum) {
 
  fulldata.then(value => {
    //console.log(value)
    value.forEach(element => {
      //console.log(element)
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
