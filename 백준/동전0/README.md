# 문제

11047번
https://www.acmicpc.net/problem/11047

# 예제 입력

```text
10 4200
1
5
10
50
100
500
1000
5000
10000
50000
```

# 메모리/시간/코드길이

9580KB/132ms/712B

# 풀이과정

1. 타겟 금액에 대해 동전 가치를 돌면서 크기 비교
2. 타겟 금액이 동전 가치보다 작아질 때, 그 이전 인덱스 값을 빼기(ex 4200-1000=3200)

- 어떻게 ?
- 돌면서 같거나 커지는 값 있으면 그 이전 값 저장

3. 0원 될때까지 반복 (ex 3200-1000=2200, 2200-1000=1200, 1200-1000=200, 200-100=100, 100-100=0)

1. 첫 풀이 (시간초과)

```javascript
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

while (targetPrice >= 0) {
  // 타겟금액이 0이 될 때 까지
  for (i = 0; i < coinValues.length; i++) {
    if (targetPrice < coinValues[i]) {
      // 만약 타겟금액이 코인가치보다 작을 때
      // console.log("이전 타겟금액", targetPrice);
      // console.log("최대 동전 가치", coinValues[i]);
      // console.log("이전 동전 가치", coinValues[i - 1]);
      targetPrice -= coinValues[i - 1];
      coinCount++;
      // console.log("뺀 타겟금액", targetPrice);
      // console.log("==============");
      break;
    } else if (targetPrice === coinValues[i]) {
      targetPrice -= coinValues[i];
      break;
    }
  }
}

console.log(coinCount);
```

2. 챗지 최적화 (성공)

```javascript
let input = require("fs").readFileSync("input.txt").toString().split("\n");
input = input.map((e) => e.replace("\r", ""));

let targetPrice = Number(input[0].split(" ")[1]);
const coins = Number(input[0].split(" ")[0]);
const coinValues = [];

let coinCount = 0;

for (let i = 1; i <= coins; i++) {
  coinValues.push(Number(input[i]));
}

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
```
