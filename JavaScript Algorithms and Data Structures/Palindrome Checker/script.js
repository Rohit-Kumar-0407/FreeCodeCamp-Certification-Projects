function palindrome(str) {
    let new_str = str.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let reverse_str = "";
    let n = new_str.length;
    for (let i=1;i<=n;i++) {
        reverse_str += new_str[n-i];
    }
    if(reverse_str == new_str) {
        console.log("It's a Palindrome");
        return true;
    } else {
        console.log("It's not a Palindrome");
        return false;
    }
}
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");