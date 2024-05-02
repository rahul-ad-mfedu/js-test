function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Peace"));