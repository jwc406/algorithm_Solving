//3. 프로그래머스 가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

let s = "qwer"
function solution (s){
    if(s.length%2===0) {
       return s[(s.length/2)-1]+s[(s.length/2)] // undefined //찍수
    } else {
       return s[Math.floor(s.length/2)] // 홀수면 2로 나누고 내림 e //홀수
    }
}

// Math.ceil 올림
// Math.round 반올림
// Math.floor 내림