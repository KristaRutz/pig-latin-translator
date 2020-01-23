// Backend Logic

var vowels = ["a", "e", "i", "o", "u", "y"];

function translateToPL(str){
  var wordSplit = str.split(" ");
  var newSentence = [];
  console.log(wordSplit)
  for(var i = 0; i < wordSplit.length; i++) {
    newSentence.push(translateWordToPL(wordSplit[i]));
  }
  return newSentence.join(" ");
}


function translateWordToPL(str){

  var restOfStr = str.substr(1);
  var firstCharStr = str.charAt(0);
  var splitChar = str.split("");
  // console.log(splitChar)
  // var testWord = "crab"
  // var testArr = testWord.split("") 

  if (str.length === 1) { // one letter word
    var pigStr = str + "ay";
  } else if (firstCharStr === "a" || firstCharStr ===  "e" || firstCharStr === "i" || firstCharStr === "o" ||firstCharStr ===  "u") { // begins with vowel
    var pigStr = str + "way";
  } else { // begins with consonant

    for (var i = 0 ; i < vowels.length ; i += 1){
      if(!firstVowelIndex) {
        if (vowels.includes(splitChar[i])){
          var firstVowelIndex = i;


          restOfStr = str.substr(i);
          firstCharStr = str.substr(0, i);

          if (firstCharStr.charAt(1) === "q" && restOfStr.charAt(0) === "u"){
            firstCharStr = firstCharStr + "u";
            restOfStr = restOfStr.substr(1);
            //console.log(restOfStr + firstCharStr + "ay")
          }

        } 
      }
    }
    var pigStr = restOfStr + firstCharStr + "ay";

  }

  return pigStr;
}


// User Interface Logic

$(document).ready(function() {
  $("#translateForm").submit(function(event) {
    event.preventDefault();

    var input = $("#inputText").val();

    var output = translateToPL(input);
    $("#output").text(`Translation: ${output}`);
  })
})