function sum() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) + Number(num2);
  let sum = document.getElementById("result");
  sum.value = result;
  if (num1 == "" || num2 == "") {
    sum.value = "";
    alert("Enter a number!");
  }
}

let btnSum = document.querySelector("button:nth-child(1)");
btnSum.onclick = function () {
  sum();
  num1.value = "";
  num2.value = "";
};

function min() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) - Number(num2);
  let min = document.getElementById("result");
  min.value = result
  if (num1 == "" || num2 == "") {
    min.value = "";
    alert("Enter a number!");
  }
}

let btnMin = document.querySelector("button:nth-child(2)");
btnMin.onclick = function () {
  min();
  num1.value = "";
  num2.value = "";
};

function mult() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) * Number(num2);
  let mult = document.getElementById("result");
  mult.value = result;
  if (num1 == "" || num2 == "") {
    mult.value = "";
    alert("Enter a number!");
  }
}

let btnMult = document.querySelector("button:nth-child(3)");
btnMult.onclick = function () {
  mult();
  num1.value = "";
  num2.value = "";
};

function divide() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) / Number(num2);
  let divide = document.getElementById("result");
  divide.value = result;
  if (num1 == "" || num2 == "") {
    divide.value = "";
    alert("Enter a number!");
    return;
  }
  if (num2 == 0) {
    alert("Cannot be divided by 0!");
  }
}

let btnDivide = document.querySelector("button:nth-child(4)");
btnDivide.onclick = function () {
  divide();
  num1.value = "";
  num2.value = "";
};