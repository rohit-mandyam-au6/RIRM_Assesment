function validatePhoneNumber(input_str) {
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(re.test(input_str)) {
        return "Valid";
    }
    else {
        return "Invalid";
    }
}

console.log(validatePhoneNumber("2124567890"));
console.log(validatePhoneNumber("212-456-7890"));
console.log(validatePhoneNumber("(212)456-7890"));
console.log(validatePhoneNumber("(212)-456-7890"));
console.log(validatePhoneNumber("212.456.7890"));
console.log(validatePhoneNumber("212 456 7890"));
console.log(validatePhoneNumber("+12124567890"));
console.log(validatePhoneNumber("+12124567890"));
console.log(validatePhoneNumber("+1 212.456.7890"));
console.log(validatePhoneNumber("+212-456-7890"));
console.log(validatePhoneNumber("1-212-456-7890"));