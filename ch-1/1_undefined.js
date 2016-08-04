/**
 * Created by kondurj on 8/4/16.
 */
var x;
console.log('**********************************');
console.log(x);
if(x === undefined) {
    console.log("x is undefined");
}
if(x) {
    console.log('undefined evaluates to TRUE');
} else {
    console.log('undefined evaluates to FALSE');
}
console.log(x+45); // will result in NaN
x=45;
console.log(x);
console.log('**********************************');