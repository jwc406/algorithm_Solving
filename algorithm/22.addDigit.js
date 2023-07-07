// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 수지
// function solution(n){
//     let answer = 0;
//     let splitN = String(n).split('') 
    
//     for(let i=0; i<splitN.length; i++){
//     answer += +(splitN[i])
//     }
//     return answer
// }

function solution(n) {
    return String(n).split('').reduce((prev, curr) => +prev + +curr,0);
}


// 정원
// function solution(n) {
//     let answer = 0;
  
//     let nums = [...String(n)];
  
//     nums.forEach((e) => {
//       answer += +e;
//     });
  
//     return answer;
//   }