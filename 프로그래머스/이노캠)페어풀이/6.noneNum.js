// 6. 프로그래머스 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
    // 1 ≤ numbers의 길이 ≤ 9
    // 0 ≤ numbers의 모든 원소 ≤ 9
    // numbers의 모든 원소는 서로 다릅니다.

// [1,2,3,4,6,7,8,0]    14
// [5,8,4,0,6,7,9]	6

function solution(numbers) {
  const sum2 = (0+9)*(9-0+1)*0.5 //총합 0+1+2+3+4+5+6+7+8+9 = 45
  const sum1 = numbers.reduce((a,b)=>(a+b)); //numbers를 모두 더한것 
  
return sum2-sum1 //모든 수의 합 - 보여지는 배열의 합 = 보여지지 않는 수의 합
}


function solution(numbers) {
    var answer = -1;
    return answer;
}