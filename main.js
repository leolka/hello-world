/**
 * Created by leolka on 18.09.2016.
 */

    alert ('Решаем уравнение вида ax^2+bx+c=0')

var a = prompt('Введите коэффициент a');
var b = prompt('Введите коэффициент b');
var c = prompt('Введите коэффициент c');

var sol = equation(a, b, c);
if (sol.res1!=sol.res2)
{
    alert('Первый корень уравнения x1 = ' + sol.res1);
    alert('Второй корень уравнения x2 = ' + sol.res2);
}
else
{
    alert('Единственный корень уравнения x = ' + sol.res1);
}


