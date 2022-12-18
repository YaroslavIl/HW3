
// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві.Функція повина повертати массив з парними номерами.

let arrRandomNumbers = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];
let arr = [];

function func() {
    for (i = 0; i < arrRandomNumbers.length; i++){
        let res = arrRandomNumbers[i];
        if (res % 2 == 0) {
            arr.push(res);
        }
    }
console.log(arr);

}

func();



// 2) Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив.

let arrproduct = [];
for (i = 0; i < 5; i++){
    let product = prompt('Що бажаєте купити ? ');
    arrproduct.push(product);
}
console.log(arrproduct);


// 3) Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел. (при розрахунках вважайте що массив може бути будьякої довжини переданий)

let mid = arrRandomNumbers.length;
let c = 0;
function sum(b) {
    for (i = 0; i < mid; i++){
        let a = arrRandomNumbers[i]
        c = c + a;
    }
    b = c / mid;
    console.log(b);
}
sum(1);


// 4)Створити функцію яка замінює в массиві =) на;)

let smile = [':)', '=)', ':)', '=)', ':)', '=)'];
let h = 0;
function arrsmile(arr) {
    for (i = 0; i < smile.length; i++) {
        h = smile[i];
        if (h === '=)') {
            smile.splice(i, 1, ';)');
        }
    }
    console.log(smile)
}
arrsmile();



// 5) створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals, якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals

let what = prompt('Введіть: last  або first', 'last');
let animals = ['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];
let a = '';
function deletes() {
if (what == 'last') {
    a = animals.splice(5, 1);
    console.log(a);
    console.log(animals);
}
else if (what === 'first') {
    a = animals.splice(0, 1);
    console.log(a);
    console.log(animals);
    }
else {
    alert('Fail');
}
}
deletes();


// 6) Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву

let b = 0;
function test() {
    for (i = 0; i < arrRandomNumbers.length; i++) {
        let a = arrRandomNumbers[i];
        b = a + b;
    }
    console.log(b);
}
test();


// 7)Створити функцію яка отримує в аргумент старт значення і фініш значення(старт менше фініша) також отрмує массив задовільної довжини.Функція повина повертати массив в якому вирізанні значення з старт індекса по фініш



let start = prompt('Введіть число для старту: ') 
let finish = prompt('Введіть число для фінішу: ') 
function newArr(start, finish) {
    let a = arrRandomNumbers.slice([start], [finish]);
    a.length;
    console.log(a);
}
newArr(start, finish);


