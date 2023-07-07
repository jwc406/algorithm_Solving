// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.



//(채연)
function solution(a, b) {
  let week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let days = new Date(2016, a-1, b);
    days = days.getDay() 
  return week[days];
}

//멋지십니다...2222


// function solution(a, b) {
//     const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
//     const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

//     let days = b
//     for(let i=0 ; i<a-1 ; i++)
//         days += monthDay[i];

//     return weekDay[days%7];
// }