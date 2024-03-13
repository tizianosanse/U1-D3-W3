const button = document.querySelector("button");
const list = document.getElementById("ul");
const input = document.getElementById("text");
button.onclick = function () {
  const item = document.createElement("li");

  console.log(input.value);
  item.innerText = input.value;
  const butt = document.createElement("button");
  butt.innerText = "X";
  butt.onclick = function () {
    item.remove();
  };
  item.appendChild(butt);
  list.appendChild(item);
};
