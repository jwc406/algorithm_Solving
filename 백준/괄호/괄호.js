// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = require("fs").readFileSync("input.txt").toString().split("\n");

const test = Number(input[0]);

let result = "";

for (let i = 1; i <= test; i++) {
  let vps = [...input[i]];

  let count = 0;

  for (let e of vps) {
    // element
    if (e == "(") {
      count++;
    }
    if (e == ")") {
      count--;
    }
    if (count < 0) {
      break;
    }
  }
  if (count == 0) result += "YES\n";
  else result += "NO\n";
}
console.log(result);
