// 명함 번호	가로 길이	세로 길이
//    1	            60      	50
//    2           	30      	70
//    3	            60      	30
//    4            	80      	40

// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
// 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
// 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
//일단 가로 세로 돌면서 제일 큰 숫자 뽑아서 비교하고, 
//제일 큰 숫자가 있는 가로/세로가 판별이 되면
//그 반대에서 다음으로 큰 숫자만큼 곱해주기
    
//     let width = []
//     let height = []
    
//     for(let i=0; i<sizes.length; i++){
//        width.push(sizes[i][0])
//        height.push(sizes[i][1])
//     }
    
//     let maxLength = Math.max(...width, ...height) 
//     let dontHasMax = !(width.includes(maxLength)) ? width : height //젤 큰 수 안가지는 배열
    
//     let second = dontHasMax.sort((a,b) => b - a)[1] //내림차순 정렬
    
//     return maxLength * second

    let width = []
    let height = []
    
    for(let i=0; i<sizes.length; i++){
       width.push(sizes[i][0])
       height.push(sizes[i][1])
    }
    
    for(let i=0; i<width.length; i++){ //값 교환
        if(width[i] < height[i]) { //세로가 가로보다 길때 두 값 교환
            let temp = width[i]
            width[i] = height[i]
            height[i] = temp
        }
    }
    return Math.max(...width) * Math.max(...height)
}

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;
    for(i=0; i < sizes.length; i++){
    const width = sizes[i][0];
    const height = sizes[i][1];
    maxW = Math.max(maxW, Math.max(width, height));
    maxH = Math.max(maxH, Math.min(width, height));
    }

  return maxW * maxH;
}



//챗지 
function solution(sizes) {
    let max_width = 0;
    let max_height = 0;
    
    for (let i = 0; i < sizes.length; i++) {
      const card = sizes[i];
      const width = card[0];
      const height = card[1];
      
      // 현재 명함의 가로 길이와 세로 길이 중 더 큰 값과 max_width, max_height를 비교하여 갱신
      max_width = Math.max(max_width, Math.max(width, height));
      max_height = Math.max(max_height, Math.min(width, height));
    }
    
    return max_width * max_height;
  }
  


  // 명함 번호	가로 길이	세로 길이
//    1	            60      	50
//    2           	30      	70
//    3	            60      	30
//    4            	80      	40

  //챗지2 [a,b]
  function solution(sizes) {
    let max_width = 0;
    let max_height = 0;

    for (const [width, height] of sizes) {
      max_width = Math.max(max_width, Math.max(width, height));
      max_height = Math.max(max_height, Math.min(width, height));
    }
  
    return max_width * max_height;
  }

//   정확히 말씀드리자면, for...of 루프 내에서 [width, height]와 같은 배열 구조 분해를 사용하여 각 요소를 선언할 필요가 없습니다. 
//   구조 분해는 루프의 반복 변수에 직접 할당하여 사용할 수 있습니다.
