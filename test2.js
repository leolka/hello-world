/**
 * Created by leolka on 19.09.2016.
 */

    /* Test for checking if input is not a number */

var test_sol = equation('a', 'b', 'c');
var x1 = test_sol.res1;
var x2 = test_sol.res2;

assert.isNaN (x1, 'Error!');
assert.isNaN (x2, 'Error!');