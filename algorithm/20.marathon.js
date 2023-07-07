function solution(participant, completion) {
    answer = String(participant.filter(x => !completion.includes(x)));
    return answer 
}

function solution(participant, completion) {
    participant = participant.sort()
    completion = completion.sort()
    
    for(let i = 0; i<participant.length; i++){
        if(participant[i] != completion[i]) {
            return participant[i]
        }
    }
}

//주어진 문제는 마라톤에 참여한 선수들 중 완주하지 못한 선수의 이름을 찾는 문제입니다. 
// 주어진 조건에 따라 완주자 명단과 참가자 명단의 배열을 비교하여 완주하지 못한 선수를 찾아야 합니다.

// 주어진 조건에 따르면 참가자의 수는 완주자의 수보다 1명 많으며, 참가자와 완주자는 중복된 이름이 있을 수 있습니다.

// 이 문제를 해결하기 위해 다음과 같은 방법을 사용할 수 있습니다.

// 참가자 명단과 완주자 명단을 사전순으로 정렬합니다.
// 두 명단을 앞에서부터 비교하면서 동일한 위치에 있는 선수들을 비교합니다.
// 만약 동일한 위치에 있는 선수들이 다르다면 해당 선수는 완주하지 못한 선수이므로 그 이름을 반환합니다.
// 두 명단을 모두 비교한 후에도 완주하지 못한 선수가 없다면 참가자 명단의 마지막 선수가 완주하지 못한 선수입니다.

// // 참고
// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];

//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }

//     return 'nothing';
// }

// 해시는 데이터를 고정된 크기의 값으로 매핑하는 것이다. 
// 해시 함수는 입력에 대해 고유한 해시값을 생성한다. 
// 해시 충돌은 서로 다른 입력에 대해 동일한 해시값이 발생하는 상황이다.

//매핑은 두 개의 요소 또는 값 간의 관계를 설정하는 것이다. 
// 하나의 값이 다른 값에 대응되는 형태이다. 
// 매핑은 데이터 처리, 데이터베이스, 알고리즘 등에서 중요한 개념이다.