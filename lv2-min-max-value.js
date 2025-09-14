function solution(s) {
    var answer = '';

    const inputArr = s.split(' ').map((val) => Number(val));

    const minVal = Math.min(...inputArr);
    const maxVal = Math.max(...inputArr);

    answer = String(minVal) + ' ' + String(maxVal);
    
    return answer;
}