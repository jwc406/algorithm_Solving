// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// n은 10,000,000,000이하인 자연수입니다.

//[5,4,3,2,1]
function solution(n) { //n = 12345
    let A = String(n).split('') //  ["1","2","3","4","5"]
    let B = A.reverse() //  ["5","4","3","2","1"]
    // return Number(B); // null
    return B.map(Number)
    } 

//준우님방식 ㅇㅅㅇ??
    function solution(n) {
        return String(n).split('').reverse().map(Number)
        } 
//세상이좋아졌다는뜻
//많은노고가있었다는뜻
//ㅋㅋㅋㅋㅋㅋㅋㅋ
// return n.toString().split('').reverse().map(o => o = parseInt(o));