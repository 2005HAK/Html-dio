let lines = 14;
 
let n = parseInt(lines);
let totalMatches = 0;
    while(n > 1){
        if(n % 2 == 0){
          p = n / 2
          n = p;
        }else{
          p = ((n-1) / 2)
          n = p + 1;
        }
        totalMatches = totalMatches + p;
    }
    
console.log(totalMatches);