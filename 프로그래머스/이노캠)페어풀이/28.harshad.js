/* 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다. */


/* 나용
  1) x를 받고 각 자릿수로 나눈다
  2) 각 자릿수를 더한 값을 추출
  3) x를 더한 값으로 나누고, 나누어떨어지면 H.A.S.H.A.R.D num */

  function solution() { 
  let sum = 0;
  String(x).split('').map(Number).forEach((d) => { sum += d });
  return x % sum == 0 ? true : false;
}

// 정원
function solution(x) {
    let xArr = String(x).split("").map(Number)
    let sum = 0
    xArr.forEach((e)=>{
        sum += e
    })
    return x % sum === 0
}

//수지
function solution(x) {
    let arr = String(x).split('') 
    let sum = arr.reduce((sum,b) => sum + parseInt(b), 0); 
    return (x%sum) === 0 
}