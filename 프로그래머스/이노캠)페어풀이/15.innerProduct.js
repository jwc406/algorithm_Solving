//15. 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// a[0]*b[0] ... 

let a = [1,2,3,4];

a.forEach((e)=>{
    console.log(e);
})

function solution(a, b) {
    let answer = 0;
    for (let i=0; i<a.length; i++){
        answer += a[i]*b[i]
    }
        return answer
}

function solution(a, b) {
    let i = 0;
    let sum = 0;
    a.forEach((e)=>{
        sum += e*b[i];
        i++;
    })
    return sum;
}

function solution(a, b) {
    var answer = 0;
    a.forEach((cur, idx) => {
        answer += (cur * b[idx]);
    })
    return answer;
}