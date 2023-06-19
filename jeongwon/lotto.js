function solution(lottos, win_nums) {
  //두번째 시도 -> 랭크 배열 이용 최종
  let rank = [6, 6, 5, 4, 3, 2, 1];

  let zero = 0,
    match = 0;
  lottos.forEach((e) => {
    if (e === 0) zero++;
    else if (win_nums.includes(e)) match++;
  });

  return [rank[match + zero], rank[match]];

  //   첫번째 시도
  //   let minRank = 7;
  //   let maxRank = 1;
  //   let zero = 0, match = 0;
  //   lottos.forEach((e)=>{
  //       if(e === 0) zero++;
  //       else if(win_nums.includes(e)) match++;
  //   });
  //   if(zero ===6) return [1,6]
  //   else if(match === 0) return [6,6]
  //   return [minRank - (match + zero), minRank-match]

  // ******************************************************************

  //첫번째 첨삭 - 변수명 수정
  //   function solution(lottos, win_nums) {
  //     let highestRank = 1;
  //     let lowestRank = 7;
  //     let zeroCount = 0;
  //     let matchCount = 0;

  //     lottos.forEach((num) => {
  //       if (num === 0) zeroCount++;
  //       else if (win_nums.includes(num)) matchCount++;
  //     });

  //     if (zeroCount === 6) return [highestRank, lowestRank - 1];
  //     else if (matchCount === 0) return [lowestRank, lowestRank];

  //     return [lowestRank - (matchCount + zeroCount), lowestRank - matchCount];
  //   }

  // ******************************************************************

  //세번째 - 챗지 필터 이용 코드
  //   function solution(lottos, win_nums) {
  //     const rank = [6, 6, 5, 4, 3, 2, 1]; // 순위에 따른 일치하는 번호의 개수

  //     // 민우의 로또 번호와 당첨 번호를 비교하여 일치하는 숫자의 개수를 구합니다.
  //     let matchCount = lottos.filter(num => win_nums.includes(num)).length;
  //     let unknownCount = lottos.filter(num => num === 0).length;

  //     // 최고 순위와 최저 순위를 계산합니다.
  //     const maxRank = matchCount + unknownCount;
  //     const minRank = matchCount;

  //     return [rank[maxRank], rank[minRank]];
  // }
}
