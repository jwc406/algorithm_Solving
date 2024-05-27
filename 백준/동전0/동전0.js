// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input.map((e) => e.replace("\r", ""));

let targetPrice = Number(input[0].split(" ")[1]);
const coins = Number(input[0].split(" ")[0]);
const coinValues = [];

let coinCount = 0;

for (i = 1; i < coins; i++) {
  // 동전 가치 리스트 생성
  coinValues.push(Number(input[i]));
}

// 1. 시간초과 풀이
// while (targetPrice >= 0) {
//   // 타겟금액이 0이 될 때 까지
//   for (i = 0; i < coinValues.length; i++) {
//     if (targetPrice < coinValues[i]) {
//       // 만약 타겟금액이 코인가치보다 작을 때
//       // console.log("이전 타겟금액", targetPrice);
//       // console.log("최대 동전 가치", coinValues[i]);
//       // console.log("이전 동전 가치", coinValues[i - 1]);
//       targetPrice -= coinValues[i - 1];
//       coinCount++;
//       // console.log("뺀 타겟금액", targetPrice);
//       // console.log("==============");
//       break;
//     } else if (targetPrice === coinValues[i]) {
//       targetPrice -= coinValues[i];
//       break;
//     }
//   }
// }

// 2. 성공 풀이
coinValues.sort((a, b) => b - a); // 동전 가치를 내림차순으로 정렬

for (let i = 0; i < coinValues.length && targetPrice > 0; i++) {
  const coinValue = coinValues[i];
  if (targetPrice >= coinValue) {
    const numCoins = Math.floor(targetPrice / coinValue);
    targetPrice -= numCoins * coinValue;
    coinCount += numCoins;
  }
}

console.log(coinCount);
