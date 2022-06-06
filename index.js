// Assignments

let storednum = "";
let storedoperator = "";
const input = document.querySelector("input");
//eventListeners
document.addEventListener("click", station);
//functions

function station(e) {
  if (e.target.classList.contains("number")) {
    updateInput(e.target);
  } else if (e.target.classList.contains("operator")) {
    if (storednum == "") {
      storedoperator = e.target.textContent;
      storeValue(input.value);
    } else if (storednum != "") {
      if (input.value == "") {
        storedoperator = e.target.textContent;
      } else {
        evaluate();
      }
    }
  } else if (e.target.classList.contains("equal")) {
    evaluate();
  } else if (e.target.classList.contains("clear")) {
    clearValue();
  }
}

function updateInput(target) {
  input.value += target.textContent;
}
function evaluate() {
  input.value = eval(storednum + storedoperator + input.value);
  storednum = "";
  storedoperator = "";
}
function storeValue(value) {
  storednum = value;
  input.value = "";
}
function clearValue() {
  storednum = "";
  storedoperator = "";
  input.value = "";
}
