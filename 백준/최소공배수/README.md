# 문제

1934번
https://www.acmicpc.net/problem/1934

# 메모리/시간/코드길이

11424KB/128ms/639B

# 풀이과정

최소공배수 구하는 법

1. 소인수분해하기 (실패)

- 1 제외하고 2부터 나눠보기 - 2로 나눠지면 최소 약수
- 3 나눠지면 3 최소 약수
- 2 이후 짝수는 모두 2, 3 이후도
- 7, 11 부터는 2, 3으로 안나뉘어지고, 자기 자신으로만 나뉘어질 때

  ```javascript
  for (i = 1; i <= testCase; i++) {
    let nums = input[i].split(" ");
    let minNums = [];

    for (j = 0; j < nums.length; j++) {
      if (Number(nums[j]) % 2 === 0) {
        minNums.push(2);
      } else if (Number(nums[j]) % 3 === 0) {
        minNums.push(3);
      } else if (Number(nums[j]) % Number(nums[j]) === 0) {
        minNums.push(Number(nums[j]));
      }
      console.log(minNums);
    }
  }
  ```

2. 최대공약수로 최소공배수 구하기

최대공약수, 최소공배수 공식
https://imkh.dev/algorithm-gcd-lcm

공백 전처리
https://gogoma.tistory.com/entry/JavaScript-split-%EA%B3%B5%EB%B0%B1%EA%B0%92-%EC%A0%9C%EA%B1%B0%ED%95%98%EB%8A%94-%EC%97%AC%EB%9F%AC%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95
