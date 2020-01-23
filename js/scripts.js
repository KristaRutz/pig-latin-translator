// Backend Logic

var vowels = ["a", "e", "i", "o", "u", "y"];

function translateToPL(str){
  return translateWordToPL(str);
}


function translateWordToPL(str){

  var restOfStr = str.substr(1);
  var firstCharStr = str.charAt(0);
  var arrayedStr = [];
  var splitChar = str.split("");
  // console.log(splitChar)
  // var testWord = "crab"
  // var testArr = testWord.split("") 

  if (str.length === 1) { // one letter word
    var pigStr = str + "ay";
  } else if (firstCharStr === "a" || firstCharStr ===  "e" || firstCharStr === "i" || firstCharStr === "o" ||firstCharStr ===  "u") { // begins with vowel
    var pigStr = str + "way";
  } else { // begins with consonant
    console.log(str);

    for (var i = 0 ; i < vowels.length ; i += 1){
      if(!firstVowelIndex) {
        if (vowels.includes(splitChar[i])){
          console.log("vowels!");
          var firstVowelIndex = i;
          console.log(firstVowelIndex);

          restOfStr = str.substr(i);
          firstCharStr = str.substr(0, i);
          console.log(str);
        } else {
          console.log("no vowels")
        }
      }
    }
    console.log(str);
    var pigStr = restOfStr + firstCharStr + "ay";
    console.log(str);
  }
  
  console.log(pigStr)
  return pigStr;
}


// User Interface Logic

$(document).ready(function() {
  $("#translateForm").submit(function(event) {
    event.preventDefault();

    var input = $("#inputText").val();
    console.log(input);

    var output = translateToPL(input);
    $("#output").text(`Translation: ${output}`);
  })
})