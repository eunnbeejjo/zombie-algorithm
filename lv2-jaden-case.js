function solution(s) {
    var answer = '';
    const toArr = s.split(' ');

    const asdf = toArr.map((val) => {
        const splitLetters = val.split('');
        console.log('zzz',splitLetters);
        let result;
        
//         첫글자 숫자 아님
        if (isNaN(splitLetters[0])) {
            result = splitLetters.map((val,idx) => {
                if (idx === 0) return val.toUpperCase();
                else return val.toLowerCase();
            });
        }
//         첫글자 숫자
        else {
            result = splitLetters.map((val, idx) => {
                if (idx === 0) return Number(val);
                else return val.toLowerCase();
            });
        }
        
        return result.join('');
    });
    
    console.log('result =>', asdf.join(' '));
    
    return asdf.join(' ');
}