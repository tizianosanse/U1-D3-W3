const button = document.querySelector("button");
const list = document.getElementById("ul");
const input = document.getElementById("text");
button.onclick = function () {
  if (input.value === "") {
    alert("you dont write nothing...");
  } else {
    const item = document.createElement("li");

    console.log(input.value);
    item.innerText = input.value;
    item.className = "li";
    const butt = document.createElement("button");
    butt.innerText = "X";
    butt.className = "butt";
    butt.onclick = function () {
      item.remove();
    };
    item.appendChild(butt);
    list.appendChild(item);
  }
};
