//Reference Video Links: https://www.youtube.com/watch?v=P0XMXqDGttU&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=5
//                       https://www.youtube.com/watch?v=7zcXPCt8Ck0&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=6
//                       https://www.youtube.com/watch?v=fXAGTOZ25H8&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=7
//                       https://www.youtube.com/watch?v=_i-uLJAh79U&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=8
// function myFunction() {
//   console.log("Hello, Simmba");
// }
// myFunction();

// function printMessage(msg) {
//   console.log(msg);
// }
// printMessage("Hey, Vrunda");

// function sum(x, y) {
//   total = x + y;
//   return total;
// }
// let val = sum(4, 5);
// console.log(val);

// const sub = (x, y) => {
//   total = x - y;

//   return total;
// };

// let newVal = sub(8, 5);
// console.log(newVal);

// function countVowels(input) {
//   let count = 0;
//   for (const char of input) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// let ans = countVowels("Vrunda");
// console.log(ans);

// const countVowels = (input) => {
//   let count = 0;
//   let newAns = input.toLowerCase();
//   for (const char of newAns) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// let ans = countVowels("VRUNDA");
// console.log(ans);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//   console.log(val);
// });

// arr.forEach((val) => {
//   console.log(val);
// });

// let nums = [2, 3, 4, 5, 6];

// let evenArr = nums.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(evenArr);
// let evenArr = nums.filter((num) => {
//   return num > 3;
// });
// console.log(evenArr);

// nums.map((val)=>{
//   console.log(val);
// });
// let newArr = nums.map((val) => {
//   return val;
// });
// console.log(newArr);
// let newArr = nums.map((val) => {
//   return val ** 2;
// });
// console.log(newArr);

// let calcSquare = (num) => {
//   console.log(num * num);
// };
// nums.forEach((num) => {
//   console.log(num * num);
// });
// nums.forEach(calcSquare);
// nums.forEach(newArr);

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(output);
// const output = arr.reduce((prev, curr) => {
//   return prev > curr ? prev : curr;
// });
// console.log(output);

// let marks = [97, 64, 32, 49, 99, 96, 86];
// let output = marks.filter((val) => {
//   return val > 90;
// });
// console.log(output);

// let n = prompt("Enter a number:");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(sum);

// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// });
// console.log(factorial);

// let button = document.getElementById("myId");
// console.dir(heading);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);

// let para = document.getElementsByTagName("p");
// console.dir(para);

// let elements = doument.querySelector("p");
// console.dir(elements);

// let elementsAll = doument.querySelectorAll("p");
// console.dir(elementsAll);

// let x = document.querySelector("div");
// console.dir(x);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Vrunda Raval";

// let divs = document.querySelectorAll(".box");
// let idx = 0;
// for (div of divs) {
//   console.log((div.innerText = `Hello ${idx}`));
//   idx++;
// }

// console.log(divs);
// divs[0].innerText = "NewYork";
// divs[1].innerText = "Paris";
// divs[2].innerText = "Sydney";

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "green";
// div.innerText = "Hello";
// let idVal = div.getAttribute("id");
// console.log(idVal);
// let nameVal = div.getAttribute("name");
// console.log(nameVal);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let newBtn = document.createElement("button");
// newBtn.innerText = "clickme";
// console.log(newBtn);

// let div=document.querySelector("div");
// div.append(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let div = document.querySelector("div");
// div.remove();

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);

// let para = document.querySelector("p");
// console.log(para);
// para.getAttribute("class");
// para.setAttribute("class", "newClass");
// para.classList.add("newClass");
// para.classList.remove("newClass");

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//   console.log("btn1 was clicked");
//   console.log(evt);
// });

// btn1.addEventListener("click", () => {
//   console.log("Handler 2");
// });
// const handler3 = () => {
//   console.log("Handler 3");
// };
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("Handler 4");
// });

// btn1.removeEventListener("click", handler3);
// btn1.onclick = (e) => {
//   console.log(e);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you are inside div");
// };

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  console.log("You are trying to change mode");
  if (currMode === "light") {
    currMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }

  console.log(currMode);
});
