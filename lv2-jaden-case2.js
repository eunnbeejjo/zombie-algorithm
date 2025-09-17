function solution(s) {
    return s
        .split(' ')
        .map(word => {
            if (!word) return '';
            const [first, ...rest] = word;
            return isNaN(Number(first))
                ? first.toUpperCase() + rest.join('').toLowerCase()
                : first + rest.join('').toLowerCase();
        })
        .join(' ');
}
