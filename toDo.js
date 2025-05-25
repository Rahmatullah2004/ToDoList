// const add = document.querySelector('.add');
// let input = document.querySelector('.input');
// var lists = [];
// let index = -1;
// let icon ='❌';
// add.addEventListener('click', function(){
//   if(input.value != ''){
//     index++;
//     lists.push(input.value);
//     input.value = '';
//     let content = document.createElement("h1");
//     content.style.cursor = "pointer";
//     content.innerHTML = `${lists[index]}  ${icon}<br>`;
//     document.body.appendChild(content);

//   }
// })

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

// inset to the list
const addComment = (input) => {
  if (input != "") {
    let text = document.createElement("h2");
    let container = document.createElement("div");
    let x = document.createElement("div");
    x.textContent = finish;
    x.style.cursor = "pointer";
    text.textContent = `${input} ${uncheck}`;
    text.style.cursor = "pointer";
    container.appendChild(text);
    container.appendChild(x);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    document.body.appendChild(container);
    read(text, input);
    del(container, x);
  }
};

add.addEventListener("click", () => {
  addComment(input.value);
  input.value = "";
});
