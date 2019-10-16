// Треугольник
let str = "#";
while (str.length<=7){
	console.log(str + "\n");
	str+="#";
}
// Доска
let row = '';
for (let i = 0; i < 8; i++) {
    // console.log(i);
    for (let j = 0; j < 8; j++) {
        // console.log(j);
        if((i+j) % 2 === 0){
            row +=' '
        } else {
            row +='#'
        }
    }
    row +='\n'
}
console.log(row);
console.log('\n');

// функция min
function min(min,max) {
    if(min <= max){
        console.log(min);
    }else{
        console.log(max);
    }
}
min(88,6)
console.log('\n');
// Сумма диапазона
let array=[]
function range(first, last, arg) {
    if(first <= last){
        for (let i = first; i <= last; i++) {
            array.push(i)
            
         }
         console.log( array);
         if(arg != ``){
            array[array.length] = arg
            // console.log( array);
            return array
         }
         return array
    }else{
        console.log('Первый аргумент должен быть меньше второго');
    }
}
// range(1,11)
function sum(array) {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        sum = array[index] + sum
    }
    console.log(sum);
}
sum(range(1,10,-1))
console.log('\n');
// Обращаем массив вспять.
function reverseArrayInPlace(params) {
    if(params != [] && params != ''){
        let newarray = []
        let j = 0
        for (let i = params.length-1; i >= 0 ; i--) {
            console.log(i)
            newarray[j++] = params[i]
        }
        return console.log(newarray);
    }
    return console.log('Нет аргумента');
}
reverseArrayInPlace([1,2,6,3])
let arrs1 = [1,2,2,2,3]
reverseArrayInPlace(arrs1)
console.log('\n');
// Свертка
let arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
let concat = arrs.reduce(function(result, current) {
    console.log(result.concat(current));
    return result.concat(current)

}, []);
console.log('\n');
// Стравнение 
// Я не понял это
function deepEqual(one,two) {
    console.log(typeof one);
    console.log(typeof two);
    if(one == null|| two == null || typeof one == 'object' || typeof two == 'object'){
       console.log('Не верный один из аргументов');
    }else{
        var propsInA = 0, propsInB = 0;

        for (var prop in one){
            propsInA += 1;
        }

        for (var prop in two) {
            propsInB += 1;
            if (!(prop in one) || !deepEqual(one[prop], two[prop]))
            return false;
        }
        console.log();
        
        return propsInA == propsInB;
    }
}
let obj1 = {
    name: "name",
    age: 21
};
let obj2 = {
    name: "SSSS"
};
console.log();
deepEqual(obj1,obj2)
console.log('\n');
console.log('\n');
// Я не понял это
var weekDay = function() {
    var names = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return {
      name: function(number) { return names[number]; },
      number: function(name) { return names.indexOf(name); }
    };
  }();
  
  console.log(weekDay.name(weekDay.number("Суббота")));