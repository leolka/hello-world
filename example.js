/**
 * Created by leolka on 18.09.2016.
 */

alert ('Решаем уравнение вида ax^2+bx+c=0');

var a = prompt('Введите коэффициент a');
var b = prompt('Введите коэффициент b');
var c = prompt('Введите коэффициент c');

var d = b*b - 4*a*c;
alert ('Дискриминант уравнения = '+d);
try{
if (d<0)
    throw ('Err1');
else {
    if (d == 0) {
        var x = -b / (2 * a);
        alert('Корень уравнения = ' + x);
    }
    else {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert('Первый корень = ' + x1);
        alert('Второй корень = ' + x2);
    }
}}
 catch (er)
 {
     if(er=="Err1")
     alert('Дискриминант отрицательный, корней нет');
 }