$(document).ready(function() {
  //Business Logic

  var toPigLatin = function(sentence){

    //split sentence into an array
    var sentenceArray = sentence.split("");

    if

    return sentenceArray;

  }

  //User Interface Logic
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //grab user input
    var sentence = $("#userSentence").val();

    alert(toPigLatin(sentence));

  });

});
