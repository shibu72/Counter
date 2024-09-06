let output = document.getElementById("output");
let input = document.getElementById("input");
let value = 0;
// using localStorage for store counting numbers
let store = localStorage;

function update() {
    submit = () => {
    let inputValue = parseInt(input.value);
    if (input.value == 0) {
      store.setItem("num", 0);
      return (input.style.border = "1px solid red");
    } else {
      store.setItem("num", inputValue);
      value = parseInt(store.getItem("num"));
    }
    output.innerText = value;
  };

  // increment Output: 1
  increment = () => {
    let increase = (value += 1);
    store.setItem("num", increase);
    output.innerText = increase;
  };

  // reset Output: 0
  reset = () => {
    store.setItem("num", 0);
    output.innerText = value = 0;
  };

  // decrement Output: -1
  decrement = () => {
    if (value === 0) {
      return store.setItem("num", 0);
    }
    let decrease = (value -= 1);
    store.setItem("num", decrease);
    output.innerText = decrease;
  };

  value = parseInt(store.getItem("num"));
  output.innerText = value;
  console.log(value);
}
update();
