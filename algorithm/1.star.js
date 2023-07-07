// 1. 프로그래머스 직사각형 별찍기

// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 입력 5 3
// 출력 
// *****
// *****
// *****

// 1번 풀이
    // process.stdin.setEncoding('utf8');
    // process.stdin.on('data', data => {
    //     const input = data.split(" ");
    //     const n = Number(input[0]), 
    //             m = Number(input[1]);
    //     for(let i = 0; i<m; i++){ 
    //         let a = "";
    //         for(let j = 0; j<n-1; j++){ 
    //             a += "*";
    //         } 
    //         console.log(a += "*"); 
    //     }
    // });

//2번 풀이 
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const input = data.split(" ");
//     const n = Number(input[0]), m = Number(input[1]);
    
//     let a = ""

//     for(let i = 0; i<m; i++){ 
//         for(let j = 0; j<n; j++){
//         a += "*";
//         }
//     a += "\n"
//     }
// console.log(a)
// });

//3번 풀이 - 차력쇼(?)
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), 
//             b = Number(n[1]);
    
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }
// });

for(let i = 0; i<m; i++){
    let a = "";
    for(let j = 0; j<n-1; j++){
        a += "*";
    }
    console.log(a += "*");
}