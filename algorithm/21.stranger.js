// 한 개 이상의 단어로 구성된 문자열 s
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾸세요.
// ex. try hello world => TrY HeLiO WoRiD
// 첫번째 글자는 짝수로 처리.
// 문자열 전체의 짝홀이 아니라 단어별로 짝홀을 판단

// function solution(s) {
//     let answer = 0;
//     for(let i=0; i<s.length; i++){
//        if (i%2===0) {
//         answer += s[i].toUpperCase()
//         } else if (i%2!==0) {
//             answer += s[i]
//         }
//     }
//     return answer
// }

// 정원
// function solution(s) {
//     let input = s.split(" ");
//     let answer = "";

//     for(let i = 0; i<input.length; i++){
//         for(let j = 0; j<input[i].length; j++){
//             if(j % 2 === 0) answer += input[i][j].toUpperCase()
//             else answer += input[i][j].toLowerCase()
//         }
//         if(i != input.length - 1) answer += " ";
//     }
//     return answer
// }

//채연
// function solution(s) {
//   let answer = '';
//   let result = s.split(' ');

//   for (i = 0; i < result.length; i++) {
//     for (j = 0; j < result[i].length; j++) {
//       if (j % 2 === 0) {
//         answer += result[i][j].toUpperCase();
//       } else {
//         answer += result[i][j].toLowerCase();
//       }
//     }
//     if (i < result.length - 1) {
//       answer += ' ';
//     }
//   }
//   return answer;
// }

// 인터넷 참고
// function solution(s) {
//     let answer = '';
//     let words = s.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         for(let j = 0; j < words[i].length; j++) {
//             if(j % 2 === 0) {
//                 answer += words[i][j].toUpperCase();
//             } else {
//                 answer += words[i][j].toLowerCase();
//             }
//         }
//         if (i < words.length -1) {
//             answer += ' ';
//         }
//     }
//     return answer;
// }

// 추가 모범답안

let s = "try s";

function solution(s) {
  let sum = []; // sum = ["TrY", "S" ...]

  let words = s.split(" "); // ["try","hello","world"]
  for (let i = 0; i < words.length; i++) {
    //0, 1

    let answer = ""; //초기화

    for (let j = 0; j < words[i].length; j++) {
      //0,1,2
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase(); // words 배열에 [i]번째 요소의 [j]번째 문자 words[0]번째 요소의 0번째 문자 => T/Y/S
      } else {
        answer += words[i][j].toLowerCase(); // r
      }
    }

    sum.push(answer); // sum에 answer를 push // "TrY", "S"
  }

  return sum.join(" "); // sum을 split해놨던거 원상복구 // 'TrY S'
}

//sum 배열이 [1, 2, 3]인 경우, sum.join(' ')은 '1 2 3'이라는 문자열을 반환합니다. 각 요소 사이에 공백 문자열이 삽입되어 있습니다.
//따라서 return sum.join(' ') 코드는 배열 sum의 모든 요소를 문자열로 결합하고, 각 요소 사이에 공백 문자열을 삽입하여
// 해당 문자열을 반환하는 역할을 수행합니다.
