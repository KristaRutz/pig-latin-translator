// Backend Logic

function translateToPL(str){

  var restOfStr = str.substr(1);
  var firstCharStr = str.charAt(0);

  if (str.length === 1) {
    var pigStr = str + "ay";
  } else if (firstCharStr === "a" || firstCharStr ===  "e" || firstCharStr === "i" || firstCharStr === "o" ||firstCharStr ===  "u") {
    var pigStr = str + "way";
  } else {
    var pigStr = restOfStr + firstCharStr + "ay";
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