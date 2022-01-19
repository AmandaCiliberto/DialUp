//get html element for tv product
let productTv = document.getElementById("tv-product");
//get html element for randomPhone number
const randomPhone = document.getElementById("r-num");
//variable to store points
//let points = 0;

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
  var timeleft = 10;
  var gameTimer = setInterval(function () {
    if (timeleft <= 0) {
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
      // points calculation
      //--------------------


      
      //reset shopProduct
      shopProduct.textContent = "";
      //reset tv product
      productTv.textContent = '';
      //reset random phone number
      randomPhone.textContent = '';
      //reset input value
      document.querySelector("input").value = null;
      //run Start game again by pressing 'start game' button
      startGameBtn.addEventListener("click", startGame);
    } else {
      document.getElementById("time-left").innerHTML = timeleft + "s";
    }
    timeleft -= 1;
  }, 1000);
  return timeleft;
};

//gets the result for the game end
const getResult = function () {
  console.log("im inside getResult");
  const chosenNum = parseInt(document.querySelector("input").value);
  const randomNo = myGame.randomPhoneNum;
  const myProduct = myGame.shopListProduct;
  const storeProduct = productTv.textContent;

  if (!chosenNum) {
    console.log("Please input a number on the phone");
  } else if (chosenNum === randomNo && myProduct === storeProduct) {
    console.log("random number" + randomNo);
    console.log(chosenNum);
    console.log(myProduct);
    console.log(storeProduct + "test");
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
};

//initialize rotary dial
const init = function () {
  const div = document.createElement("div");

  div.setAttribute("class", "input-field");

  const input = document.createElement("input");

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
function startGame(getResult) {
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

  //starts the timer
  timer();

  //gets the result - calls the callback function
  getResult;
}
