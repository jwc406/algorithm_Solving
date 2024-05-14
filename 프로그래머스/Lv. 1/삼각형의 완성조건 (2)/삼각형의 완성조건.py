def solution(sides):
    answer = 0
    biggest = max(sides)
    lowerst = min(sides)
    
    case1 = biggest+lowerst - 1 #다른 변 길때
    case2 = biggest-lowerst + 1 #있는 변 길때
    
    return case1-case2+1
