const handleSubmit = (e) => {
  !e.preventDefault();
  console.log("submit", e);
};
const text = document.getElementById("text");
text.addEventListener("keyup", (event) => {
  console.log(event);
  if (event.key === "Enter" && event.target.value.length > 0) {
    console.log("Enter premuto");
    const items = document.createElement("li");
    items.innerText = text.value;
  }
});
