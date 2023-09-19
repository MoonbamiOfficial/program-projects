
const passwordInput = document.querySelector('.js-input-pass')
const generatePassBtn = document.querySelector('.js-generate-pass-btn')
generatePassBtn.addEventListener('click', generatePassword);

const maxPasswordLength = 15;

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = "~`!@#$%^&*()_+-=?><";

const allCharacters = lowerCaseLetters + numbers + upperCaseLetters + symbols;

function generatePassword() {
    let password = "";
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(maxPasswordLength > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordInput.value = password;
}