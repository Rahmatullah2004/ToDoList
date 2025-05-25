let uncheck = "⬜";
let check = "✅";
let finish = "❌";
const add = document.querySelector(".add");
let input = document.querySelector(".input");

// read the list
const read = (s, input) => {
  s.addEventListener("click", function () {
    if (s.textContent == `${input} ${uncheck}`) {
      s.textContent = `${input} ${check}`;
      s.style.color = "gray";
    } else {
      s.textContent = `${input} ${uncheck}`;
      s.style.color = "black";
    }
  });
};

// delete function
const del = (container, x) => {
  x.addEventListener("click", function () {
    container.textContent = "";
  });
};

let lists = document.createElement("h1");
let list = localStorage.getItem("list1");
list = JSON.parse(list);
lists.textContent = list;
document.body.appendChild(lists);
let count = 0;
// inset to the list
const addComment = (input) => {
  if (input != "") {
    
    read(text, input);
    del(container, x);
  }
};

add.addEventListener("click", () => {
  addComment(input.value);
  input.value = "";
});
