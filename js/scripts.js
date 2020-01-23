// Backend Logic

function translateToPL(str){

  var firstcharstr = str.charAt(0);
  var restofstr = str.substr(1);
  var pigstr = restofstr + firstcharstr + "ay";
  
  console.log(pigstr)
  return pigstr;
}

// function translateToPL("i"){
//   return "i";
//   "st" += ("ay")
// }


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