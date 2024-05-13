function solution(wallpaper) {
    let fileLocation = []; // 파일 위치 배열
    for(i=0; i<wallpaper.length;i++){ //한 줄
      for(j=0; j<wallpaper[0].length;j++){ //줄의 한 칸
        if(wallpaper[i][j]===".") continue;
        else if(wallpaper[i][j]==="#"){
            fileLocation.push([i, j]);
        }
      }  
    }
    let xValues = [];
    let yValues = [];
    fileLocation.forEach(coord=>{
        xValues.push(coord[0]);
        yValues.push(coord[1]);
    })
    const minX = Math.min(...xValues);
    const minY = Math.min(...yValues);
    const maxX = Math.max(...xValues);
    const maxY = Math.max(...yValues);
    
    return [minX, minY, maxX+1, maxY+1]
}
