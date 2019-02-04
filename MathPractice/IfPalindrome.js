function isPalindrome(str) {
    // var srtLen = str.length;
    var strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return("yes");
    } else {
        return("no");
    }
}

test = isPalindrome('asdffdsa');
test2 = isPalindrome('qwerty');

console.log(test);
console.log(test2);