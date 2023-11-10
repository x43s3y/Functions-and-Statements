function NxNMatrix(n) {
    for (var i = 0 ;i < n; i++) {
        let result = '';
        for (let i = 0; i < n; i++) {
            result += n + ' '
        }
        console.log(result);
    }
}   

NxNMatrix(3)