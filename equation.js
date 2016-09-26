/** Created by leolka on 18.09.2016.
 */

function equation(a, b, c) {
    var res;

    if (a == 0) {
        alert('Это не квадратное уравнение, если a=0!');
        return;
    }
    else {
        var d = b * b - 4 * a * c;
        alert('Дискриминант уравнения = ' + d);
        if (d < 0) {
            alert('Корней уравнения нет');
            return;
        }
        else {
            if (d == 0) {
                var x = -b / (2 * a);
                //res = {res1: x, res2: x};
                res = {res1: x, res2: x};
                return (res);
            }
            else {
                var x1 = (b + Math.sqrt(d)) / (2 * a);
                var x2 = (-b - Math.sqrt(d)) / (2 * a);
                //res = {res1: x1, res2: x2};
                res = {res1: x1, res2: x2};
                return (res);
            }
        }
    }
}