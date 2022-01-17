//class phoneGame
class PhoneGame {
  constructor() {
    //array of products
    this.products = ['fridge', 'blender', 'vacuum', 'toaster', 'washing machine', 'steam iron', 'lamp', 'air condition'];
    this.randomPhoneNum = Math.floor(100000000 + Math.random() * 900000000);
    this.shopListProduct = this.products[Math.floor(Math.random() * this.products.length)];
    console.log(this.shopListProduct);
    this.tvProduct = this.products[Math.floor(Math.random() * this.products.length)];
    console.log(this.tvProduct);
  }
  //10s timer function
  /*timer() {
    var timeleft = 10;
var gameTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(gameTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
  }*/
  //method to check if game is finished (right product && right phone number)
  /*checkIfFinished() {
    // ...
  }*/
}

//initialize rotary dial
const init = function () {
  const div = document.createElement("div");

  const input = document.createElement("input");

  const btn = document.createElement("button");

  btn.innerText = "Call";

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

//start the myGame object (from the class PhoneGame)
const myGame = new PhoneGame();

//show shopping list
let shopProduct = document.getElementById("shopProduct");
shopProduct.textContent = myGame.shopListProduct;
//show tv list
let productTv = document.getElementById("tv-product");
productTv.textContent = myGame.tvProduct;


//get Start Game button from html
const startGameBtn = document.getElementById("btn-start-game");
startGameBtn.addEventListener("click", startGame);
//startGameBtn.onclick = startGame();
//console.log(startGameBtn.onclick, 'clicked');

//store random phone number on the random phone number element from html
const randomPhone = document.getElementById("random-phone");
let phoneNum = randomPhone.innerHTML;
myGame.randomPhoneNum = phoneNum;

//starts the game
//when pressing the startGame button show random products on the tv and shopping list
function startGame(){
  console.log("i'm inside the startGame");
  
  //myGame.timer();
}


//create class 'product'

//create objects inside the class for each product(?)

//get two random objects, one for tv one for shopping list


