let inp = document.getElementsByTagName("input")[0];
let btnAdd = document.getElementsByTagName("button")[0];
let btnCalc = document.getElementsByTagName("button")[1];
let all = [];
btnAdd.addEventListener("click", () => {
  if (!inp.value) {
    console.error("Empty");
  }
  all.push(inp.value);
  inp.value = "";
});

const calc = () => {
  let div2 = document.createElement("div");
  let parent = document.getElementById("div1");
  parent.innerHTML = "";
  let sum = 0;
  for (let i = 0; i < all.length; i++) {
    sum += +all[i];
  }

  div2.innerHTML = sum;
  parent.appendChild(div2);
  all = [];
};