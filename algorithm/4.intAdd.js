// 4. 프로그래머스 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// (a+b)*(a-b+1)*0/5

//1번 풀이 - 가우스의 재림
// function adder(a, b){
//     var result = 0
//     //함수를 완성하세요
//     return (a+b) * (Math.abs(a-b)+1) / 2;
// }

//2번 풀이
function solution(a, b) {
    let answer = 0;
    if(a<b) {
        for (let i=a; i<=b; i++) {
            answer +=i
        }
        } else if (a>b) { //a5 b3 5+4+3 12 ... 9
            for (let j=a; j>=b; j--) {
                answer +=j
            }
            } else {
                answer+=a
        }
    return answer;
}

//3번 풀이
function solution(a, b) {
    var answer = 0;
    
    if(a === b) return a;
    
    let smaller = a<b? a : b;
    let bigger = a>b? a : b 
    
    for(smaller; smaller<=bigger; smaller++){
        answer += smaller;
    }
    return answer;
}