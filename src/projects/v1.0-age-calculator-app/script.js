
let userSelect = document.querySelector('#date');
userSelect.max = new Date().toISOString().split("T")[0];
const calculateAgeBtn = document.querySelector('.js-calculate-age-btn')
    .addEventListener('click', calculateAge);

function calculateAge() {
    let birth = new Date(userSelect.value);

    let birthDay = birth.getDate();
    let birthMonth = birth.getMonth() + 1;
    let birthYear = birth.getYear();

    let present  = new Date();

    let presentDay = present.getDate();
    let presentMonth = present.getMonth() + 1;
    let presentYear = present.getYear();

    let getDay, getMonth, getYear;
    getDay = presentDay - birthDay;
    getMonth = presentMonth - birthMonth;
    getYear = presentYear - birthYear;

    if(presentMonth >= birthMonth) getMonth = presentMonth - birthMonth;
    else {
        getYear--;
        getMonth = 12 + presentMonth - birthMonth;
    }

    if(presentDay >= birthDay) getDay = presentDay - birthDay;
    else {
        getMonth--;
        getDay = getDaysInMonth(birthYear, birthMonth) + presentDay - birthDay;
    }
    if(getMonth < 0) {
        getMonth = 11;
        getYear--;
    }
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}