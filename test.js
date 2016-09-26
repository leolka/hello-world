/**
 * Created by leolka on 19.09.2016.
 */

    /* Test for checking if math is ok */

var test_sol = equation(1, 2, -3);
var x1 = test_sol.res1;
var x2 = test_sol.res2;

/*if ((x1 == 1 && x2 == -3) || (x1 == -3 && x2 == 1)) {
    console.log('Test succeeeeeeeeeded');
    alert('Test succeeded');
}
else {
    console.log('Test faaaaaailed');
    alert('Test failed');
}
    */

assert.notEqual (x1, x2, 'x1=x2, solution is not right');
assert.oneOf (x1, [1, -3], 'x1 != [1, -3], solution is not right');
assert.oneOf (x2, [1, -3], 'x2 != [1, -3], solution is not right');