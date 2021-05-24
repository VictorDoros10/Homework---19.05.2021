function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(number(3, 17))


let birthday = new Date();
birthday.setFullYear(1995, 2, 10);
birthday.setHours(5);
birthday.setMinutes(45);

console.log(birthday);