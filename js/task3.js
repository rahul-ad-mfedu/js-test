function getMultiplesOfTwo(num) {
    var multiplesOfTwo = num.map(function(number) {
        return number * 2;
    });
    return multiplesOfTwo;
}
var numbers = [1, 2, 3, 4];
var multiplesOfTwo = getMultiplesOfTwo(numbers);
console.log(multiplesOfTwo);