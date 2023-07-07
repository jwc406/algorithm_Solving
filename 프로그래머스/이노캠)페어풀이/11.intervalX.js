// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// x*2를 n개만큼 가진 리스트 만들기 //x, x+x (x+x)+x (x+x+x)+x ...

// function solution(x, n) {
//     var answer = [];
//     let abs = Math.abs(x);
    
//     for (let i = abs; i <= abs*n; i += abs) {
//         x>0? answer.push(i): answer.push(i*(-1))
//     }
    
//     return answer;
// }

function solution(x, n) {
    var answer = [];
    for (let i = 1; i<=n; i++){
        answer.push(x*i);
    }
    return answer;
}

