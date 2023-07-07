// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

function solution(arr){
    // 효율성 실패 
    // for(let i = 0; i<arr.length; i++){
    //     if(arr[i] === arr[i+1]) {
    //         arr.splice(i+1,1)
    //         i--
    //     }
    // }
    // return arr
    
    // 챗지 참고
    let del = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]) {
            del.push(arr[i])
        }
    }
    return del
}

//수지
function solution(arr) {
    let answer = [];
    for(let i=0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
        answer.push(arr[i]);
        }
    }
    return answer
}

//준방
function solution(arr){
    return arr.filter((val,index) => val != arr[index+1]);
}
// filter() 메서드는 콜백 함수의 반환값이 true인 요소들로 이루어진 새로운 배열을 생성합니다. 

function solution(arr){
  return arr.filter((element, index) => element != arr[index + 1])
}

// 화살표 함수에는 단일 표현식이 있는 경우 중괄호 {}를 생략할 수 있습니다. 
// 이 경우 표현식의 결과가 자동으로 반환됩니다.

// 따라서 주어진 코드에서 val != arr[index+1]는 표현식이며, 이 표현식의 결과가 filter() 메서드에 의해 사용되어 요소를 필터링하는 기준이 됩니다. 
// 즉, true를 반환하는 요소만 새로운 배열에 포함됩니다.

// 만약 콜백 함수가 중괄호 {}를 사용하여 여러 문장을 포함한다면, 
// return 문을 명시적으로 사용하여 반환값을 지정해야 합니다. 하지만 주어진 코드에서는 단일 표현식이므로 return 문을 생략하여 간결하게 작성한 것입니다.