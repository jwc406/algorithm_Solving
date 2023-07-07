// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
    var answer = String(n).split('').sort().reverse().map(Number).join("")
    return parseInt(answer);
}

//function solution(n) {
//     return +(String(n).split('').sort().reverse().join(""));
// }

function solution(n) {
    return Number([...String(n)].sort((a,b)=>(b-a)).join(""));
}

function solution(n) {
    return +([...String(n)].sort((a,b)=>(b-a)).join(""));
}


function solution(n) {
    return String(n).split('').sort().reverse().map(Number).reduce((p,c) => p * 10 + c, 0)
}


// `a.k.a 준방`
// 준방~구


