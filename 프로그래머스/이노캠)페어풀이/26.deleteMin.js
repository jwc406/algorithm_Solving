// 제일 작은 수 제거하기
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

//채연
function solution(arr) {
if (arr.length === 1) { //< =  == === 
    return [-1]
} else {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  return arr
}
}

function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    }
    arr.splice(arr.indexOf(Math.min(...arr)), 1); //arr에서 작은 값 가진 요소 삭제
    return arr
}


// function solution(arr) {
//     let sortArr = arr.sort((a,b)=>b-a) // 4,3,2,1
//     if (arr.length>1){
//     return sortArr.filter(number => number > Math.min(...arr));
//     } else {
//         return [-1]
//     }
// }

function solution(arr) {
    if (arr.length>1){
    return arr.filter(number => number > Math.min(...arr));
    } else {
        return [-1]
    }
}


const arr = [3, 1, 5, 2];
Math.min(arr); // 반환값: NaN 배열자체가 인수로 들어가기 때문이다.
// 배열자체를 넣는게 아니라 spread를 해서 각각 넣어줘야 함수가 작동한다.





// function solution(arr) {
//     // Array 함수 이용
//     let min = arr.reduce((p, c) => Math.min(p,c))
//     let r = arr.filter(v => v != min);
//     r = r.length == 0 ? [-1] : r;
//     console.log(r)
//     return r;
// }


function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  
  const minValue = Math.min(arr); // 배열에서 최솟값 찾기
  const filteredArr = arr.filter((num) => num !== minValue); // 최솟값을 제외한 배열 생성
  
  return filteredArr;
}


// Math.min()에서 스프레드 연산자가 필요한 이유! - chatGPT

// ...은 복사가 아니고 그냥 spread 해주는 거였다...

// 배열의 요소를 개별적인 인수로 전달해야 하는 이유는 `Math.min()` 함수가 개별적인 인수들 중에서 최솟값을 찾는 방식으로 동작하기 때문입니다.
// `Math.min()` 함수는 개별적인 인수를 받아 그 중에서 가장 작은 값을 반환하는 함수입니다. 배열을 전달할 경우, 배열 전체가 하나의 인수로 취급되어 배열 자체가 최솟값으로 간주됩니다. 따라서, 배열의 요소를 개별적인 인수로 전달하지 않으면 원하는 결과를 얻을 수 없습니다.
// 스프레드 연산자 `...`를 사용하여 배열의 요소를 전개하면, 배열의 요소가 개별적인 인수로 전달됩니다. 이렇게 하면 `Math.min()` 함수는 각각의 요소를 개별적으로 비교하여 최솟값을 찾을 수 있습니다.

// 예를 들어, 다음과 같이 배열 `[3, 5, 2]`의 최솟값을 찾는 경우를 생각해보겠습니다:

// ```javascript
// const arr = [3, 5, 2];
// const minValue = Math.min(arr); // 잘못된 방법
// console.log(minValue); // NaN (Not a Number)
// ```

// 위의 코드에서 `Math.min(arr)`은 잘못된 방법입니다. `arr` 배열 자체가 하나의 인수로 전달되기 때문에 `Math.min()` 함수는 `NaN`을 반환합니다.
// 반면에, 스프레드 연산자를 사용하여 배열의 요소를 개별적인 인수로 전달하는 경우 올바른 결과를 얻을 수 있습니다:

// ```javascript
// const arr = [3, 5, 2];
// const minValue = Math.min(...arr); // 올바른 방법
// console.log(minValue); // 2
// ```

// 위의 코드에서 `Math.min(...arr)`은 올바른 방법입니다. `...arr`을 사용하여 배열의 요소를 개별적인 인수로 전달하면, `Math.min()` 함수는 각 요소를 개별적으로 비교하여 최솟값인 `2`를 반환합니다.
// 따라서, `Math.min()` 함수는 배열의 요소를 개별적인 인수로 전달하여 올바른 동작을 수행할 수 있도록 해야 합니다.

//Bard 답변
// 하지만 arr를 직접 사용하면 오류가 발생하고, ...arr를 사용하면 오류가 발생하지 않습니다. 왜냐하면 Math.min() 함수는 배열의 가장 작은 값을 찾기 때문에 arr를 직접 사용하면 arr가 배열인지 객체인지 알 수 없기 때문입니다. 따라서 ...arr를 사용하면 arr가 배열로 변환되어 Math.min() 함수는 arr에서 가장 작은 값을 찾을 수 있습니다.

// 그냥 arr를 사용하면 얘가 객체인지 배열인지 알수없음