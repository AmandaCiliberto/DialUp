//10s timer function
var timeleft = 10;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

//function to return a random phone number
Math.floor(100000000 + Math.random() * 900000000);

//create class 'product'

//create objects inside the class for each product(?)

//get two random objects, one for tv one for shopping list

//create the rotary dial
const init = function () {
  const div = document.createElement("div");

  const input = document.createElement("input");

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
