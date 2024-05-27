// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input.map((e) => e.replace("\r", ""));

const testCase = Number(input[0]);

let result = "";

// 최대공약수 구하기 - 유클리드 호제법
for (i = 1; i <= testCase; i++) {
  let nums = input[i].split(" ").filter(Boolean);
  nums.sort((a, b) => b - a);
  a = nums[0]; // 최소공배수
  b = nums[1];

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // 최소공배수 구하기 - a, b의 최소공배수 =  a*b/a,b의 최대공약수
  let leastCM = (nums[0] * nums[1]) / a;
  result += leastCM + "\n";
}

console.log(result);
