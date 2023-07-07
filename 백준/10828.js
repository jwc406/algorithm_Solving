// /dev/stdin

// let input = require("fs").readFileSync("input.txt").toString().split("\n");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input = input.map((e) => e.replace("\r", ""));

let i = 1;
let order = "";

let stack = [];
let top = 0;

let answer = "";

while (i <= +input[0]) {
  order = input[i].split(" ")[0];
  result = "";

  switch (order) {
    case "push":
      result = input[i].split(" ")[1];
      stack[top++] = result;
      break;
    case "pop":
      if (stack.length === 0) {
        result = "-1";
        answer += result + " ";
      } else {
        top--;
        result = stack.splice(-1);
        answer += result + " ";
      }
      break;
    case "top":
      result = top ? stack[top - 1] : -1;
      answer += result + " ";
      break;
    case "size":
      result = top;
      answer += result + " ";
      break;
    case "empty":
      result = top ? 0 : 1;
      answer += result + " ";
      break;
    default:
      break;
  }
  i++;
}

console.log(answer.split(" ").join("\n"));
