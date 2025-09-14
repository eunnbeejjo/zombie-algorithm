function solution(A,B){
    var answer = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    answer = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);

    return answer;
}

/**
 * 오답!
 * for 문 돌렸더니 효율성 통과못함 ㅋㅋ
 */
//  function solution(A,B){
//     var answer = 0;
    
//     A.sort((a, b) => a - b);
//     B.sort((a, b) => b - a);
    
//     for (let i = 0; i < A.length ; i++) {
//         answer += A[i] * B[i];
//     }

//     return answer;
// }