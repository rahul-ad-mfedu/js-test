function getEvenNumbers(evenum) {
    var evenNumbers = evenum.filter(function(num) {
        return num % 2 === 0;
    });
    return evenNumbers;
}
var numbers = [1, 2, 3, 4];
var evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);