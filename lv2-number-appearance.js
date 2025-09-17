function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = 0; j <= n; j++) {
            sum = sum + j + i;
            
            if (sum === n) {
                answer++;
                break;
            }
            if (sum > n) break;
        }
    }
    return answer;
}