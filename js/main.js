//dom elements
//get html for randomPhone number
const randomPhone = document.getElementById("r-num");
//variable to store points
let totalPoints = document.getElementById("points");
//get 'cal now' button
const callNow = document.getElementById("call-now");
//get shop list product
let shopProduct = document.getElementById("shopProduct");
//get html element for tv product
let productTv = document.getElementById("tv-product");
//text on pop up
let finalResult = document.getElementById("result-text");
//try again button
let tryAgain = document.getElementById("try-again");
//get tv element
let tv = document.getElementById("tv-container");

// TRYING SOMETHING
let timeLeft;

// sound effects
let mainSong = new Audio(
  "https://amandaciliberto.github.io/DialUp/sound/main-song.mp3"
);
let clicking = new Audio(
  "https://amandaciliberto.github.io/DialUp/sound/btnClick.mp3"
);
let lose = new Audio("https://amandaciliberto.github.io/DialUp/sound/lose.mp3");
let win = new Audio("https://amandaciliberto.github.io/DialUp/sound/win.mp3");
let calling = new Audio(
  "https://amandaciliberto.github.io/DialUp/sound/calling.mp3"
);

//variables for win condition
let randomNo;
let chosenNum;
let myProduct;
let storeProduct;
let gameTimer;

//class phoneGame
class PhoneGame {
  constructor() {
    //array of products
    const products = new Array();
    this.products = products;

    products[0] = new Image();
    products[0].src =
      "https://amandaciliberto.github.io/DialUp/images/fridge.png";

    products[1] = new Image();
    products[1].src =
      "https://amandaciliberto.github.io/DialUp/images/blender.png";

    products[2] = new Image();
    products[2].src =
      "https://amandaciliberto.github.io/DialUp/images/vacuum.png";

    products[3] = new Image();
    products[3].src =
      "https://amandaciliberto.github.io/DialUp/images/toaster.png";

    products[4] = new Image();
    products[4].src =
      "https://amandaciliberto.github.io/DialUp/images/washingMachine.png";

    products[5] = new Image();
    products[5].src =
      "https://amandaciliberto.github.io/DialUp/images/steamIron.png";

    products[6] = new Image();
    products[6].src =
      "https://amandaciliberto.github.io/DialUp/images/lamp.png";

    products[7] = new Image();
    products[7].src =
      "https://amandaciliberto.github.io/DialUp/images/airCon.png";

    this.randomPhoneNum = Math.floor(10000000 + Math.random() * 90000000);
    this.shopListProduct =
      this.products[Math.floor(Math.random() * this.products.length)];
    this.tvProduct =
      this.products[Math.floor(Math.random() * this.products.length)];
  }
}

//start the myGame object (from the class PhoneGame)
let myGame;

function hidePopUp() {
  document.getElementById("popUp-container").style.visibility = "hidden";
}

//10s timer function
const timer = function () {
  var timeleft = 35;
  gameTimer = setInterval(function () {
    if (timeleft < 0) {
      clearInterval(gameTimer);
      document.getElementById("time-left").innerHTML = "Time Out!";
      startGameBtn.textContent = "NEW GAME";
      document.getElementById("btn-start-game").style.visibility = "visible";
      //turn tv off
      let tv = document.getElementById("tv-container");
      tv.style.backgroundImage =
        "url('https://amandaciliberto.github.io/DialUp/images/tv-off.png')";
      //get result
      getResult();
      //reset random phone number
      randomPhone.textContent = "";
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
  chosenNum = parseInt(document.getElementById("chosenNum").value);
  randomNo = myGame.randomPhoneNum;
  myProduct = myGame.shopListProduct.src;
  storeProduct = productTv.src;

  if (!chosenNum) {
    alert("Please input a number on the phone");
  } else if (chosenNum === randomNo && myProduct === storeProduct) {
    //click the button to get  timeleft
    totalPoints.textContent = parseInt(totalPoints.textContent) + 1;
    //show points on pop up
    document.getElementById("pop-points").textContent = totalPoints.textContent;
    //set visibility of pup up to visible
    document.getElementById("popUp-container").style.visibility = "visible";
    finalResult.innerHTML =
      "You won! <br>You called the right number and got the right product";
    win.play();
    tryAgain.innerText = "Next Game";
    tryAgain.addEventListener("click", hidePopUp);
  } else if (chosenNum === randomNo && myProduct !== storeProduct) {
    lose.play();
    //set visibility of pup up to visible
    document.getElementById("popUp-container").style.visibility = "visible";
    finalResult.innerHTML =
      "You lost!<br> You bought the wrong product! Try again!";
    tryAgain.addEventListener("click", hidePopUp);
  } else if (chosenNum !== randomNo && myProduct === storeProduct) {
    lose.play();
    //set visibility of pup up to visible
    document.getElementById("popUp-container").style.visibility = "visible";
    finalResult.innerHTML =
      "You lost!<br> You had the right product but the wrong number!";
    tryAgain.addEventListener("click", hidePopUp);
  } else if (chosenNum !== randomNo && myProduct !== storeProduct) {
    lose.play();
    //set visibility of pup up to visible
    document.getElementById("popUp-container").style.visibility = "visible";
    finalResult.innerHTML =
      "You lost! <br> You called the wrong number and got the wrong product!";
    tryAgain.addEventListener("click", hidePopUp);
  }
  return chosenNum, randomNo, myProduct, storeProduct;
};

//gets time left and store it as points
let callStore = function () {
  chosenNum = parseInt(document.getElementById("chosenNum").value);
  randomNo = myGame.randomPhoneNum;
  myProduct = myGame.shopListProduct.src;
  storeProduct = productTv.src;
  timeLeft = document.getElementById("time-left").innerHTML;
  mainSong.pause();
  //callback function to call store
  calling.play();
  document.getElementById("time-left").innerHTML = "Calling...";
  clearInterval(gameTimer);
  //callback function to wait while calling
  check = setTimeout(function () {
    //if winning - add points
    if (chosenNum === randomNo && myProduct === storeProduct) {

      totalPoints.textContent = parseInt(totalPoints.textContent) + parseInt(timeLeft);
      console.log(totalPoints.textContent);
      console.log('timeLeft :>> ', timeLeft);
      //click the button stores timeleft
       let pointsNum = parseInt(totalPoints.textContent);
       pointsNum = pointsNum + parseInt(timeLeft);
      //console.log(pointsNum);
      //show points in pop up message
      document.getElementById("pop-points").textContent = pointsNum;
      //totalPoints.textContent = pointsNum;
      //stop game
      clearInterval(gameTimer);
      startGameBtn.textContent = "NEW GAME";
      document.getElementById("btn-start-game").style.visibility = "visible";
      //turn tv off
      let tv = document.getElementById("tv-container");
      tv.style.backgroundImage =
        "url('https://amandaciliberto.github.io/DialUp/images/tv-off.png')";
      //reset random phone number
      randomPhone.textContent = "";
      //reset input value
      document.getElementById("chosenNum").value = null;
      //run Start game again by pressing 'start game' button
      startGameBtn.addEventListener("click", startGame);
      //set visibility of pup up to visible
      // totalPoints.textContent = pointsNum;
      document.getElementById("popUp-container").style.visibility = "visible";
      finalResult.innerHTML =
        "You won! <br> You called the right number and got the right product";
      win.play();
      tryAgain.innerText = "Next Game";
      tryAgain.addEventListener("click", hidePopUp);
    } else {
      //stop game
      //stop the timer
      clearInterval(gameTimer);
      startGameBtn.textContent = "NEW GAME";
      document.getElementById("btn-start-game").style.visibility = "visible";
      //turn tv off
      let tv = document.getElementById("tv-container");
      tv.style.backgroundImage =
        "url('https://amandaciliberto.github.io/DialUp/images/tv-off.png')";
      //get result
      getResult();
      //reset random phone number
      randomPhone.textContent = "";
      //reset input value
      document.getElementById("chosenNum").value = null;
      //run Start game again by pressing 'start game' button
      startGameBtn.addEventListener("click", startGame);
    }
  }, 3000);
};

//initialize rotary dial
const init = function () {
  const div = document.createElement("div");

  div.setAttribute("class", "input-field");

  const input = document.createElement("input");

  input.setAttribute("placeholder", "Phone Number...");

  input.setAttribute("id", "chosenNum");

  input.disabled = true;

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
let myIndex = 0;

//changes the channel on the tv
let changeChannel = function () {
  clicking.play();
  //loop through products array
  productTv.src = myGame.products[myIndex].src;
  myIndex = (myIndex + 1) % myGame.products.length;

  //create another randomized phone number
  myGame.randomPhoneNum = Math.floor(10000000 + Math.random() * 90000000);
  randomPhone.textContent = "Call Now! " + myGame.randomPhoneNum;

  return productTv;
};

//get Start Game button from html
let startGameBtn = document.getElementById("btn-start-game");
startGameBtn.addEventListener("click", startGame);

//starts the game
function startGame() {
  myGame = new PhoneGame();
  //starts the timer
  timer();
  //make the button dissappear once the game starts
  document.getElementById("btn-start-game").style.visibility = "hidden";
  //turn on tv
  tv.style.backgroundImage =
    "url('https://amandaciliberto.github.io/DialUp/images/tv.png')";
  //show shopping list product
  shopProduct.src = myGame.shopListProduct.src;
  //show tv product
  productTv.src = myGame.tvProduct.getAttribute("src");
  //show randomPhone num
  randomPhone.textContent = "Call Now! " + myGame.randomPhoneNum;
  //when pressing up or down channel changes products on tv
  const channelBtn = document.getElementById("change-channel");
  channelBtn.addEventListener("click", changeChannel);
  //call now button listener
  const callBtn = document.getElementById("call-now");
  callBtn.addEventListener("click", callStore);

  //play song
  mainSong.play();
}
