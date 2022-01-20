
// let user;
// let userName = 'Вася';
// user = userName;
// console.log(user);


// let a = 1 + 2;
// let b = 2;
// console.log(b + a);
// let result = 8 - (b + a);
// console.log(`Результат в скобках: ${b+a}, Общий результат: ${result}`);


// let userName = false;
// let userNickName = 0;
// let user = userName||userNickName||"Unnamed User";
// console.log(user);
// console.log(typeof user);


// let userCounter = 0;
// let newUsers = ++userCounter;
// console.log(newUsers);


// let user = prompt("Введите Ваше имя");
// let userAge = prompt("Введите Ваш возраст");
// let users = user||"Без Имени";
// let userAges = userAge||" не указан";
// alert (`Добро пожаловать ${users}, Ваш возраст ${userAges}`);

// let users = 0;  /*Логическое И ищет false и выводит его значение, либо если везде true, то выводит последнее значение*/
// (users == 0) && console.log(`Нет пользователей`);
// (users > 0) && (users < 101) && console.log(`Пользователей ${users}`); // Интервал от 1до100 задан через логическое И 
// (users > 100) && console.log(`Пользователей слишком много`);


// /*Компьютер загадывает число 3  Изучить циклы, пока не могу сделать игру*/
// alert("Игра 'Угадай число от 1 до 100'");
//let ab = prompt("Введите число");
// (ab == 3) && alert("Угадал!");
// ab <= 2 && alert("Больше");
// ab >= 4 && ab <= 100 && alert("Меньше");
for (ab = prompt('Введите число от 1 до 100');  ; ab = prompt('Введите число от 1 до 100')) {

if (ab == 39){
	alert('Правильно, Угадал!');
	}	else if (ab <= 38) {
		alert('Загаданное число Больше');
	}   else if (ab >= 40){
		alert('Загаданное число Меньше')
	}
if (ab ==39) break;
}


// let transport = "car";//Конструкция switch
// switch(transport){
// 	case 'car':
// 		console.log('edu na mashine');
// 		break;

// 	case 'samokat':
// 		console.log('edu na samokate');
// 		break;
		
// 	case 'velo':
// 		console.log('edu na velo');
// 		break;
// 	default: console.log('edu ne znayu na chem')	
// }



// if (5 > 1) {
//     console.log();
// }
// else{
// 	console.log("neverno");
// }

// let message = "Hello, ";
// let messageEnd;
//   if (messageEnd === undefined){ 
// 	messageEnd = "Без имени";
// } else { messageEnd;
// }

// message += messageEnd;
// console.log(message);

/*
//Вариант №1
let user = 'Вася' let age = 36

//Вариант №2
let myage = 36;

//Вариант №3
const BLOCK_SIZE = 14 + 50;


//Вариант №4
const BLOCK_HEIGHT = 100;

//Вариант №5
if (true) {
	var size = 15;
}
console.log(size);
*/

//============================================

//ОБЪЯВЛЕНИЕ ПЕРЕМЕННОЙ

//Ключевое слово let для
//объявления переменной

//Имя переменной может содержать 
//только буквы, лучше латинского 
//алфавита, цифры и символы 
//$ и _.При этом первый символ 
//не должен быть цифрой. 

/*
//Верное объявление
let age;
let info123;
let $size;
let _color;

//Неверное объявление
let 123info;
let my-age;
*/

//---------------------------

//Названия переменных
/*
//Вместо
let s;
let sdkljghfasdfkgl;
let leftsidebarsize;

//Лучше писать
let size;
let age;
let leftSidebarSize;

//Регистр имеет значение!
let sidebarsize;
let sidebarSize;
*/

//-------------------------------------------

/*
//Использование других символов

let яПеременная;
let 我;
*/

//-------------------------------------------

/*
//Нельзя использовать зарезервированные имена

let let;
let break;
let for;

*/

//-------------------------------------------


//ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
//Объявление без значения
let myLifeStyle;

//Присвоение значения
myLifeStyle = 'freelance';


//Объявление переменной и присвоение значения
let myLifeStyle = 'freelance';

console.log(myLifeStyle);
*/

//-------------------------------------------

//ОБЪЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
/*
//В строку через запятую
let myName = 'Фрилансер по жизни', myAge = 36, myMessage = 'Живи, а работай в свободное время!';

//Через запятую с новой строки
let myName = 'Фрилансер по жизни',
	myAge = 36,
	myMessage = 'Живи, а работай в свободное время!';

//Отдельно
let myName = 'Фрилансер по жизни';
let myAge = 36;
let myMessage = 'Живи, а работай в свободное время!';
*/

//-------------------------------------------

//ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
/*
let myAge = 36;
myAge = 18;
console.log(myAge);
*/

//-------------------------------------------

//ПЕРЕДАЧА ЗНАЧЕНИЙ ПЕРЕМЕННЫХ
/*
let myAge = 36;
let myNewAge = 18;

//Копируем значение переменной myNewAge
//в переменную myAge

myAge = myNewAge;
console.log(myAge);
*/

//-------------------------------------------

//USE STRICT И ПЕРЕМЕННЫЕ

/*
// "use strict" строгий режим отключен

myAge = 36;
console.log(myAge);
*/

/*
"use strict" //строгий режим включен

let myAge = 36;
console.log(myAge);
*/

//-------------------------------------------

//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

/*
//Пример блока инструкций
function testBlock() {
	console.log('Учим');
	console.log('JS');
}
testBlock();

*/

/*
//Видимость переменной только внутри блока инструкций
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();

console.log(myAge); //Переменная не видна за пределами блока
*/

/*
//Переменные внутри и за пределами блока
let myAge = 36;

function testBlock() {
	let myAge = 18;
	console.log(myAge); //Вывод переменной
}
testBlock();

console.log(myAge); //Вывод переменной
*/


/*
//В рамках одного блока, переменную стоит использовать
//только после её объявления.

//Ошибка, мы не можем использовать
//переменную перед объявлением
console.log(myAge);
let myAge = 18;
*/

/*
//Повторное объявление переменной
//в рамках одногоблока запрещено
//let myAge = 36;
//let myAge = 15; //Ошибка - переменная уже объявлена

//В то же время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
	//Тут своя переменная i
	console.log(i);

}
for (let i = 0; i < 3; i++) {
	//И тут своя переменная i
	console.log(i);
}
*/

//-------------------------------------------

//КОНСТАНТЫ

/*
const myAge = 36;
myAge = 18; //Нельзя изменить константу

*/

/*
//Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Имя константы со значением присвоенным
//в процессе выполнения программы
const summSizes = 25 + 30;
*/

/*
//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'Фрилансер',
	age: 36,
	message: 'Живи, а работай в свободное время!'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
//Ошибки нет, данные изменились
console.log(userProfile);

*/

//-------------------------------------------

//КЛЮЧЕВОЕ СЛОВО VAR

//Области видимости

/*
//Использование переменной до её объявления

"use strict"

age = 35;
console.log(age);

var age;

*/


/*
function testBlockLet() {
	let myAgeLet = 36;
}
testBlockLet();

//Переменная НЕ видна за пределами блока
//console.log(myAgeLet);

function testBlockVar() {
	var myAgeVar = 36;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
console.log(myAgeVar);
*/

/*
if (true) {
	let sizeLet = 50;
}
//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}
//Переменная ВИДНА за пределами блока
console.log(sizeVar);
*/

//-------------------------------------------

//Стоит ли каждый раз создавать новую переменную или,
//все таки, переназначать объявленную ранее?


/*
let userName = 'Фрилансер по жизни';

// ... некий код c использованием userName ...

userName = 36;

// ... некий код c использованием userName ...

userName = 'Живи, а работай в свободное время!';

// ... некий код c использованием userName ...

// ????????????

*/

/*
let userName = 'Фрилансер по жизни';
let userAge = 36;
let userMassage = 'Живи, а работай в свободное время!';

// ... некий код c использованием
// userName, userAge, userMassage ...

*/


//-------------------------------------------
