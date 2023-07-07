// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,\
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.


// function solution (n) {
//     let three = '';
//     while (n > 0) {
//       three = (n % 3) + three;
//       n = Math.floor(n / 3);
//     }
                //  =>  n.toString(3)    
//     let reverseThree = three.split('').reverse().join('')
    
//     return Number(parseInt(reverseThree,3).toString(10));    
//   }

  function solution(n) {
    const trinary = n.toString(3);
    let result = trinary.split('').reverse().join('')
    return parseInt(result, 3)
}

// 저는 ㅈ채연님 거에서 한 줄로 만든 거예요 ㅋㅋㅋㅋㅋㅋㅋㅋ 준방준방

//준방의 후예 
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
