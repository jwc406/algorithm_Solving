// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

//왜 이런짓을..?
//ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
//준방


function solution(n) {
return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1, 2) : -1
}


function solution(n) {
    if(Number.isInteger(Math.sqrt(n))===true){
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
    } else { 
        return -1
        }
}

//준방완료 업데이트 
function solution(n) {
    return (Number.isInteger(Math.sqrt(n))) ? ((Math.sqrt(n)+1)**2) : -1   
}

//**준방오리진** 방 !!!!
function solution(n) {
    return (x = Math.sqrt(n)) % 1 == 0 ? (x + 1) ** 2 : -1;
}
// ********************************************************