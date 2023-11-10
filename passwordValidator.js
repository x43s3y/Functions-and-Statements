function passwordValidator(password='') {
    let answer = '';
    let isValid = true;
    if (password.length < 6 || password.length > 10) {
        answer += "Password must be between 6 and 10 characters" + "\n";
        isValid = false;
    }
    
    if (!/^[a-zA-Z0-9 ]+$/.test(password)) {
        answer += "Password must consist only of letters and digits" + "\n";
        isValid = false;
    }
    
    if (password.replace(/\D/g, "").length < 2){
        answer += "Password must have at least 2 digits";
        isValid = false;
    }
    
    if (isValid) {
        answer += "Password is valid";
    }
    return answer;
}

console.log(passwordValidator('Pa$22s$s'));