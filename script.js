const passwordE1 = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}.?/<>+_-";
const allChar = upperCase + lowerCase + number + symbol;

const length = 8;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length >  password.length)
    {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordE1.value = password;
}

function copyPassword(){
    passwordE1.select();
    document.execCommand("copy");
}