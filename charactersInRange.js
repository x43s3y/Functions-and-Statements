function charactersInRange(ch1, ch2) {
    let ch1ASCII = ch1.charCodeAt(0);
    let ch2ASCII = ch2.charCodeAt(0);
    let answer = '';
    if (ch1ASCII <= ch2ASCII) {
        for (let i = ch1ASCII+1; i < ch2ASCII; i++) {
            answer += String.fromCharCode(i) + ' ';
        }

    } else {
        for (let i = ch2ASCII+1; i < ch1ASCII; i++) {
            answer += String.fromCharCode(i) + ' ';
        }
    }
    return answer;
}

console.log(charactersInRange('C',

'$'));