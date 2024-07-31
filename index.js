// 1
// const bankAccount = {
//     ownerName: "Ira",
//     accountNumber: 1234567890,
//     balance: 1000,
//     deposit(money){
//         this.balance += money;
//     },
//     withdraw(money){
//         this.balance -= money;
//     },
// };

// let clientsAction = prompt("На вашому рахунку " + bankAccount.balance + " гривень. Яку операцію хочете провести(поповнити/зняти)?");
// if(clientsAction === "поповнити"){
//     let money = Number(prompt("Яку суму ви хочете покласти на рахунок?"));
//     bankAccount.deposit(money);
//     alert("Операція успішна! На рахунку "+ bankAccount.balance + " гривень");
// }
// if(clientsAction === "зняти"){
//     let money = Number(prompt("Яку суму ви хочете зняти з рахунка?"));
//     if(money <= bankAccount.balance){
//         bankAccount.withdraw(money);
//         alert("Операція успішна! На рахунку " + bankAccount.balance + " гривень");
//     }
//     else alert("На рахунку замало коштів!");
// }

// 2
// const weather = {
//     temperature,
//     humidity: "40%",
//     windSpeed: "12,8 km/h",
//     temperatureCheck(){
//         if(this.temperature >= 0) return false;
//         else return true;
//     },
// };
// const currentTemperature = prompt("Введіть температуру (в градусах Цельсія)");
// weather.temperature = currentTemperature;
// if(weather.temperatureCheck()) alert("Температура нижче 0 градусів Цельсія");
// else alert("Температура вище або рівна 0 градусів Цельсія");

// 3
// const username = prompt("Введіть ім'я користувача");
// const email = prompt("Введіть електронну пошту");
// const password = prompt("Введіть пароль");
// const user = {
//     username,
//     email,
//     password,
//     login(){
//         if(this.password.length < 8){
//             alert("пароль має містити 8 або більше символів!");
//         }
//         if(isNaN(this.password)){
//             alert("Пароль має бути числом!");
//         }
//         if(!this.email.includes("@gmail.com")){
//             alert("Помилка в написанні електронної пошти!");
//         }
//     },
// };
// user.login();

//4
const movie = {
    title: "Inside Out",
    director: "Kelsey Mann",
    year: 2024,
    rating: 9.5,
    checkRating(){
        if(this.rating >= 8) return true;
        else return false;
    },
};
alert("Назва фільму: " + movie.title + ". Директор: " + movie.director + ". Рік випуску: " + movie.year + ". Рейтинг: " + movie.rating);
// наступне - замість того, щоб фарбувати поля
if(movie.checkRating()) alert("У цього мультфільму високий рейтинг!");
else alert("У цього мультфільму рейтинг не дуже високий :(");