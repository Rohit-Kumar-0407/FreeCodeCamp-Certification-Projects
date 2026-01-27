function convertToRoman(num) {
    let num_str = num.toString();
    let rom_num = '';
    let n = num_str.length;
    // Ones Digit
    let ones_digit = parseInt(num_str[n-1]);
    console.log(ones_digit);
    if( 1 <= ones_digit <= 3 ) {
        rom_num += ('I'*ones_digit);
    } else if( ones_digit = 4 ) {
        rom_num += 'IV'; 
    } else if(ones_digit = 5) {
        rom_num = rom_num+'V'; 
    } else if( 6 <= ones_digit <= 8) {
        rom_num += ('V'+'I'*(ones_digit-5));
    } else if( ones_digit = 9) {
        rom_num += 'IX';
    } else if( ones_digit = 0) {
        rom_num += '';
    }
    console.log(rom_num);
}
convertToRoman(0);
// console.log(convertToRoman(36));