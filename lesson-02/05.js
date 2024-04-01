// Task  №5:
//  Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan", и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".
// Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

//Solution: 

let passport = {
    name: "Petr",
    surname: "Petrov",
};

const newPassport = {...passport, name: 'Ivan'}

console.log(passport.name);
console.log(newPassport.name);