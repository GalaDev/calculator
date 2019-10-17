let stateArr = [];
let stateArr2 = [];
let mathOperators = ["*", "/", "+", "-"];
let operator = "";

const display = arr => {
  if (arr[0] === 0) {
    arr.splice(0, 1);
  }
  arr.push(parseInt(event.target.innerText));
  document.querySelector(".display").innerHTML = arr.join("");
};

const backspace = state => {
  state.pop();
  if (state.length === 0) {
    document.querySelector(".display").innerHTML = state.length;
    return;
  }
  document.querySelector(".display").innerHTML = state.join("");
};

const clear = () => {
  stateArr = [];
  stateArr2 = [];
  operator = "";
  document.querySelector(".display").innerHTML = stateArr.length;
};

const equals = () => {
  document.querySelector(".display").innerHTML = eval(
    stateArr.join("") + operator + stateArr2.join("")
  );
};

document.querySelector(".main-container").addEventListener("click", event => {
  if (operator) {
    currentState = stateArr2;
  } else {
    currentState = stateArr;
  }

  if (mathOperators.includes(event.target.innerText)) {
    operator = event.target.innerText;
    currentState = stateArr2;
    return;
  }

  if (event.target.innerHTML === "=") {
    equals();
    return;
  }

  if (event.target.innerText === "C") {
    clear();
    return;
  }

  if (event.target.id === "backspace") {
    backspace(currentState);
    return;
  }

  display(currentState);
});
