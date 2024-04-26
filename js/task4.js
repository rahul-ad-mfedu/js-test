function toTitleCase(str) {
    return str.replace(/\b\W/g, function(char) {
        return char.toUpperCase();
    });
}
var inputname = "bala";
console.log("my name is: " + toTitleCase(inputname));