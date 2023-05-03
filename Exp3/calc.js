function display(val) {
  document.getElementById("result").value += val;
  return val;
}
function back() {
  let val = document.getElementById("result").value;
  console.log(val, "clicked");
  let news = val.substring(0, val.length - 1);
  console.log(news);
  document.getElementById("result").value = news;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function getSqrt() {
  var x = document.getElementById("result").value;
  var display = Math.sqrt(x);
  document.getElementById("result").value = display;
}
