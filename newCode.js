let array = [23, -34, 50, 34, 345]



function addToZero (array) {
    value = "false"
    for (i = 0; i < array.length; i++){
        // console.log(array[i])
        for (j = array.length - 1; j >= 0; j--){
            // console.log(array[j])
            if (array[i] + array[j] == 0){
               return true
            }
        }
    }
    return false
}

// console.log(addToZero(array))


function hasUniqueChar(str) {
    for (i = 0; i < str.length; i++){
        // console.log(str[i])
        for (j = i + 1; j <str.length; j++){
            // console.log(str[j])
            if (str[i] == str[j]) {
                return true
            }
        }
    }
    return false
}

// console.log(hasUniqueChar('helol'))

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

//   console.log(isPangram('the quick brown fox jumps over the lazy dog!'))

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
 
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){ 
      longestWord = strSplit[i].length
       }
    }
    return longestWord
  }
  
  console.log(findLongestWord("hi hello"))


