// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
//수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
// 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// // 처음 푼 것 까지 ㅠㅠ
// function solution(answers) {
//   // answers 길이만큼 1,2,3 수포자 배열 만들기
//   // answers 와 각 수포자 배열 비교하여 일치하는 수 비교
//   // 하나만 있으면 바로 반환, 여러개면 정렬해주기

//   let onePat = [1, 2, 3, 4, 5];
//   let twoPat = [2, 1, 2, 3, 2, 4, 2, 5];
//   let threePat = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let oneAns = [],
//     twoAns = [],
//     threeAns = [];
//   for (let i = 0; i < answers.length; i++) {
//     oneAns.push(onePat[i]);
//     twoAns.push(twoPat[i]);
//     threeAns.push(threePat[i]);
//   }

//   let j = 0;
//   let one = 0,
//     two = 0,
//     three = 0;
//   answers.forEach((e) => {
//     if (e === oneAns[j]) one++;
//     if (e === twoAns[j]) two++;
//     if (e === threeAns[j]) three++;
//     j++;
//   });

//   let indexs = [0, one, two, three]; //인덱스 출력을 위함

//   // 세 숫자 비교하여, 가장 큰 숫자가 있는 곳의 인덱스 반환하기(X)
//   // result 숫자대로 정렬 후, 제일 큰 값 있으면 하나만, 값이 같으면 다 반환(인덱스)
//   // 어떻게?ㅠㅠㅠㅠ

//   let result = [...indexs].sort((a, b) => b - a);
// }

// 2. 위에서 답 내는 부분 추가 챗지
// function solution(answers) {
//     let onePat = [1,2,3,4,5];
//     let twoPat = [2,1,2,3,2,4,2,5];
//     let threePat = [3,3,1,1,2,2,4,4,5,5];

//     let oneAns = [], twoAns = [], threeAns = [];
//     for(let i = 0; i < answers.length; i++){
//       oneAns.push(onePat[i % onePat.length]);
//       twoAns.push(twoPat[i % twoPat.length]);
//       threeAns.push(threePat[i % threePat.length]);
//     }

//     let indexs = [0, 0, 0, 0]; // 초기 인덱스 값 0으로 설정
//     answers.forEach((e, i) => {
//       if(e === oneAns[i]) indexs[1]++;
//       if(e === twoAns[i]) indexs[2]++;
//       if(e === threeAns[i]) indexs[3]++;
//     });

//     let maxVal = Math.max(...indexs.slice(1)); // 최대값 계산
//     let result = [];
//     indexs.forEach((val, index) => {
//       if(val === maxVal) result.push(index); // 최대값과 일치하는 인덱스 추가
//     });

//     return result;
//   }

//3. 쉬운 답 챗지
// function solution(answers) {
//   const patterns = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];

//   const scores = Array(patterns.length).fill(0); // 각 수포자의 점수를 저장할 배열 초기화

//   for (let i = 0; i < answers.length; i++) {
//     for (let j = 0; j < patterns.length; j++) {
//       if (answers[i] === patterns[j][i % patterns[j].length]) {
//         scores[j]++;
//       }
//     }
//   }

//   const maxScore = Math.max(...scores); // 최고 점수 계산
//   const result = scores.reduce((acc, score, index) => {
//     if (score === maxScore) {
//       acc.push(index + 1); // 인덱스 + 1을 결과에 추가 (수포자 번호는 인덱스 + 1)
//     }
//     return acc;
//   }, []);

//   return result;
// }

//4. 더 짧은 버전
// function solution(answers) {
//     const patterns = [
//       [1, 2, 3, 4, 5],
//       [2, 1, 2, 3, 2, 4, 2, 5],
//       [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     ];

//     const scores = patterns.map(pattern => answers.reduce((acc, answer, index) => {
//       if (answer === pattern[index % pattern.length]) {
//         acc++;
//       }
//       return acc;
//     }, 0));

//     const maxScore = Math.max(...scores);
//     const result = scores.reduce((acc, score, index) => {
//       if (score === maxScore) {
//         acc.push(index + 1);
//       }
//       return acc;
//     }, []);

//     return result;
//   }
