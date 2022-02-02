

console.log(' 1 ex.', `a${+'a'}as`);

function calculate(num1, num2, cal){
    return cal(num1, num2);
}
function sum(num1, num2){
    return num1 + num2;
}
function div(num1, num2){
    return num1 / num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
console.log(' 2 ex.',calculate(25, 17, mult));

function fun(index)
{
    if(index == 5) {
        return mult;
    } else {
        return function(a, b)
        { 
            return a - b;
        }
    }
}
console.log(' 3 ex.', fun(5)(10, 3));
