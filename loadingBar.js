function loadingBar(percentage) {
    let answer = `${percentage}% `;
    if ((percentage<100)) {
        answer += `[${'%'.repeat(percentage/10)}${'.'.repeat(10-percentage/10)}]\nStill loading...`
    }else{
        answer += `Complete!\n[${'%'.repeat(percentage/10)}${'.'.repeat(10-percentage/10)}]`
    }
    console.log(answer);
}

loadingBar(100)