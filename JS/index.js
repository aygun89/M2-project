"use strict";
let form = document.querySelector("#todo-form");
let toDoInput = document.querySelector(".todo-input");
let toDo = document.querySelector(".to-do");
let iconXMark = document.querySelector(".xmark");
let img = document.querySelectorAll("img");
let list = document.querySelector(".list-group");
let btn = document.querySelector(".btn");
let sortDownGrey = document.querySelector(".sortDown-grey");
let sortUpGrey = document.querySelector(".sortUp-grey");
let sortDownBlack = document.querySelector(".sortDown-black");
let sortUpBlack = document.querySelector(".sortUp-black");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (toDoInput.value.trim() === "") {
    return;
  }
  let newLi = document.createElement("li");
  let span = document.createElement("span");

  span.innerHTML = `${toDoInput.value}`;
  newLi.className = "list-group-item";
  list.style.display = "block";

  newLi.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  newLi.append(span);
  list.append(newLi);

  newLi.addEventListener("click", () => {
    newLi.style.textDecoration = "line-through";
  });
  newLi.addEventListener("dblclick", () => {
    newLi.style.textDecoration = "none";
  });

  list.style.border = "1px solid rgba(196, 196, 196, 1)";
  toDoInput.value = "";
  toDoInput.style.display = "none";
  iconXMark.style.display = "none";
  let trashs = document.querySelectorAll(".fa-circle-xmark");
  trashs.forEach((item) => {
    item.style.cursor = "pointer";
    item.style.color = "rgba(196, 196, 196, 1)";
    item.classList.add("trash");
    return item.addEventListener("click", (e) => {
      item.parentElement.remove();
    });
  });

  sortDownGrey.addEventListener("mouseenter", () => {
    sortDownGrey.style.display = "none";
    sortDownBlack.style.display = "block";
  });
  sortDownGrey.addEventListener("mouseleave", () => {
    sortDownGrey.style.display = "block";
    sortDownBlack.style.display = "none";
  });
  sortDownBlack.addEventListener("click", () => {
    sortDownBlack.style.display = "none";
    sortDownGrey.style.display = "none";
    sortUpGrey.style.display = "block";
    let allLi = document.querySelectorAll(".list-group-item");
    let textArr = [...allLi];
    textArr.sort((a, b) => {
      if (a.innerText < b.innerText) return -1;
      if (a.innerText > b.innerText) return 1;
      return 0;
    });
    list.replaceChildren(...list.children, ...textArr);
  });
});

sortUpGrey.addEventListener("mouseenter", () => {
  sortUpGrey.style.display = "none";
  sortUpBlack.style.display = "block";
});
sortUpGrey.addEventListener("mouseleave", () => {
  sortUpGrey.style.display = "block";
  sortUpBlack.style.display = "none";
});
sortUpBlack.addEventListener("click", () => {
  sortUpBlack.style.display = "none";
  sortUpGrey.style.display = "none";
  sortDownGrey.style.display = "block";

  let allLi = document.querySelectorAll(".list-group-item");
  let textArr = [...allLi];
  textArr.sort((a, b) => {
    if (a.innerText < b.innerText) return 1;
    if (a.innerText > b.innerText) return -1;
    return 0;
  });
  list.replaceChildren(...list.children, ...textArr);
});

btn.addEventListener("click", () => {
  toDoInput.style.display = "block";
  toDoInput.focus();
  iconXMark.style.display = "block";
});

iconXMark.addEventListener("click", () => {
  toDoInput.value = "";
});
