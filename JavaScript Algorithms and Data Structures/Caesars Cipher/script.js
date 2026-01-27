function rot13(str) {
  let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let code_mean = '';
  for(let letter of str) {
    if(arr.includes(letter)) {
        let idx = arr.indexOf(letter);
        let new_idx = idx + 13;
        if(new_idx < 26) {
          let new_letter = arr[new_idx];
          code_mean += new_letter;
        } else {
          let req_idx = new_idx-26;
          let new_letter = arr[req_idx];
          code_mean += new_letter; 
        }
    } else {
      code_mean += letter;
    }
  }
  return code_mean;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");