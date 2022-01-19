//get html element for tv product
let productTv = document.getElementById("tv-product");
//get html element for randomPhone number
const randomPhone = document.getElementById("r-num");
//variable to store points
let totalPoints = document.getElementById("points");
//get 'cal now' button
const callNow = document.getElementById("call-now");
//get pop up html
const modal = document.getElementById("popUp-container");

//variables
let randomNo;
let chosenNum;
let myProduct;
let storeProduct;
let gameTimer;

//class phoneGame
class PhoneGame {
  constructor() {
    //array of products
    this.products = [
      "fridge",
      "blender",
      "vacuum",
      "toaster",
      "washing machine",
      "steam iron",
      "lamp",
      "air condition",
    ];
    this.randomPhoneNum = Math.floor(10000000 + Math.random() * 90000000);
    this.shopListProduct =
      this.products[Math.floor(Math.random() * this.products.length)];
    console.log(this.shopListProduct);
    this.tvProduct =
      this.products[Math.floor(Math.random() * this.products.length)];
    console.log(this.tvProduct);
  }
};

//start the myGame object (from the class PhoneGame)
const myGame = new PhoneGame();

//10s timer function
const timer = function () {
  var timeleft = 15;
  gameTimer = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(gameTimer);
      document.getElementById("time-left").innerHTML = "Time Out!";
      startGameBtn.textContent = "NEW GAME";
      document.getElementById("btn-start-game").style.visibility = "visible";
      //turn tv off
      let tv = document.getElementById("tv");
      tv.src =
        "https://amandaciliberto.github.io/DialUp/images/tv-off.png";
      //get result
      getResult();
      //reset shopProduct
      shopProduct.textContent = "";
      //reset tv product
      productTv.textContent = '';
      //reset random phone number
      randomPhone.textContent = '';
      //reset input value
      document.getElementById("chosenNum").value = null;
      //run Start game again by pressing 'start game' button
      startGameBtn.addEventListener("click", startGame);
    } else {
      document.getElementById("time-left").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
  return timeleft;
};

//gets the result for the game end
const getResult = function () {
  console.log("im inside getResult");
  chosenNum = parseInt(document.getElementById("chosenNum").value);
  randomNo = myGame.randomPhoneNum;
  myProduct = myGame.shopListProduct;
  storeProduct = productTv.textContent;

  if (!chosenNum) {
    alert("Please input a number on the phone");
  } else if (chosenNum === randomNo && myProduct === storeProduct) {
    console.log("random number" + randomNo);
    console.log(chosenNum);
    console.log(myProduct);
    console.log(storeProduct + "test");
    //click the button to get  timeleft
    totalPoints.textContent = (parseInt(totalPoints.textContent)) + 1;
    alert("You won! You called the right number and got the right product");
  } else if (chosenNum === randomNo && myProduct !== storeProduct) {
    console.log(randomNo);
    console.log(chosenNum);
    console.log(myProduct);
    console.log(storeProduct);
    alert("You lost! You bought the wrong product! Try again!");
  } else if (chosenNum !== randomNo && myProduct === storeProduct) {
    console.log(randomNo);
    console.log(chosenNum);
    console.log(myProduct);
    console.log(storeProduct);
    alert("You lost! You had the right product but the wrong number!");
  } else if (chosenNum !== randomNo && myProduct !== storeProduct) {
    console.log(randomNo);
    console.log(chosenNum);
    console.log(myProduct);
    console.log(storeProduct);
    alert("You lost! You called the wrong number and got the wrong product!");
  } 
  return chosenNum, randomNo, myProduct, storeProduct;
};

/* let calling = function(){

} */

//gets time left and store it as points
let callStore = function(){
  //if winning - add points
  if (chosenNum === randomNo && myProduct === storeProduct) {
    //click the button to get  timeleft
    totalPoints.textContent = parseInt(totalPoints.textContent) + parseInt(document.getElementById("time-left").textContent);
    //alert
    alert("You won! You called the right number and got the right product");
    //stop game
    //stop the timer
    clearInterval(gameTimer);
    document.getElementById("time-left").innerHTML = "Calling...";
    startGameBtn.textContent = "NEW GAME";
    document.getElementById("btn-start-game").style.visibility = "visible";
    //turn tv off
    let tv = document.getElementById("tv");
    tv.src = "https://amandaciliberto.github.io/DialUp/images/tv-off.png";
    //reset shopProduct
    shopProduct.textContent = "";
    //reset tv product
    productTv.textContent = "";
    //reset random phone number
    randomPhone.textContent = "";
    //reset input value
    document.getElementById("chosenNum").value = null;
    //run Start game again by pressing 'start game' button
    startGameBtn.addEventListener("click", startGame);
  } else {
    //stop game
    //stop the timer
    clearInterval(gameTimer);
    document.getElementById("time-left").innerHTML = "Calling...";
    startGameBtn.textContent = "NEW GAME";
    document.getElementById("btn-start-game").style.visibility = "visible";
    //turn tv off
    let tv = document.getElementById("tv");
    tv.src = "https://amandaciliberto.github.io/DialUp/images/tv-off.png";
    //get result
    getResult();
    //reset shopProduct
    shopProduct.textContent = "";
    //reset tv product
    productTv.textContent = "";
    //reset random phone number
    randomPhone.textContent = "";
    //reset input value
    document.getElementById("chosenNum").value = null;
    //run Start game again by pressing 'start game' button
    startGameBtn.addEventListener("click", startGame);
  }
};

//initialize rotary dial
const init = function () {
  const div = document.createElement("div");

  div.setAttribute("class", "input-field");

  const input = document.createElement("input");

  input.setAttribute("placeholder", "Phone Number...");
  
  input.setAttribute("id", "chosenNum");
  
  const btn = document.createElement("button");

  btn.innerText = "Clear";

  btn.addEventListener("click", (e) => {
    input.value = "";
  });

  input.type = "text";

  div.append(input);

  div.append(btn);

  document.body.appendChild(div);

  const func = function (value) {
    input.value += value;
  };

  const rd = new RotaryDial({ callback: func });
};
init();

//starting index for looping thorugh array of product on tv when changing the channel
let myIndex = 1;

//changes the channel on the tv
let changeChannel = function () {
  console.log("changing channel");
  //loop through products array
  productTv.textContent = myGame.products[myIndex];
  myIndex = (myIndex + 1) % myGame.products.length;

  //create another randomized phone number
  myGame.randomPhoneNum = Math.floor(10000000 + Math.random() * 90000000);
  randomPhone.textContent = "Call Now! " + myGame.randomPhoneNum;
  console.log(randomPhone.textContent);

  console.log(productTv.textContent + " tv product ");
  return productTv.textContent;
};

//get Start Game button from html
let startGameBtn = document.getElementById("btn-start-game");
startGameBtn.addEventListener("click", startGame);

//starts the game
function startGame() {
  //starts the timer
  timer();
  //make the button dissappear once the game starts
  document.getElementById("btn-start-game").style.visibility = "hidden";
  console.log("i'm inside the startGame");
  //turn on tv
  let tv = document.getElementById("tv");
  tv.src = "https://amandaciliberto.github.io/DialUp/images/tv.png";
  //show shopping list product
  let shopProduct = document.getElementById("shopProduct");
  shopProduct.textContent = myGame.shopListProduct;
  //show tv product
  productTv.textContent = myGame.tvProduct;
  console.log("Product Tv " + productTv.textContent);
  //show randomPhone num
  randomPhone.textContent = "Call Now! " + myGame.randomPhoneNum;
  //when pressing up or down channel changes products on tv
  const channelBtn = document.getElementById("change-channel");
  channelBtn.addEventListener("click", changeChannel);
  //call now button listener
  const callBtn = document.getElementById("call-now");
  callBtn.addEventListener("click", callStore);
}