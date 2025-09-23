function solution(n) {
    var answer = 0;
    
    let fn = [0,1];
    
    for (let i = 2; i <= n; i++) {
        fn[i] = ((fn[i-2] + fn[i-1]) % 1234567);
    }
    
    console.log(fn);
    
    return fn[n];
}