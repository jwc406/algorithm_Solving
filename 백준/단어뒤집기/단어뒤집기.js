// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = require("fs").readFileSync("input.txt").toString().split("\n");

input = input.map((e) => e.replace("\r", ""));

let testCase = +input[0];
let i = 1;

let answer = "";

while (i <= testCase) {
  let sentence = input[i].split(" ");
  let reverseWord = "";
  for (let j = 0; j < sentence.length; j++) {
    reverseWord = sentence[j].split("").reverse().join("");
    answer += reverseWord + " ";
  }
  answer += "\n";
  i++;
}

console.log(answer);

// 남규님 코드
// let [count, ...input] = require('fs').readFileSync('ex.txt').toString().split('\n').map((x) => x.replace('\r', ''));

// for(let i = 0; i<count ; i++){
// let arr = input[i].split(" ")
// let newArr = arr.map((item)=> item.split('').reverse().join(""))
// console.log(newArr.join(" "))
// }
