// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = require("fs").readFileSync("input.txt").toString().split("\n");

const test = +input[0];

let stack = [];
let result = "";
let current = 1;

for (let i = 1; i <= test; i++) {
  while (current <= +input[i]) {
    stack.push(current);
    result += "+\n";
    current++;
  }

  let p = stack.pop();
  if (p != +input[i]) {
    result = "NO";
    break;
  }
  result += "-\n";
}

console.log(result);
