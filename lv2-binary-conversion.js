function solution(s) {
    var answer = [];
    
    let count = 0;
    let zeroCount = 0;
    
    while (s !== "1") {
        const oneArr = s.replaceAll('0', '');
        const zeros = s.length - oneArr.length;
        
        zeroCount += zeros;
        
        s = oneArr.length.toString(2);
        
        count++;
    }
    
    answer = [count, zeroCount]
    
    return answer;
}