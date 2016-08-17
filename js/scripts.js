$(document).ready(function() {
  //Business Logic
  var letter = /[a-zA-Z]/;
  var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];

  var toPigLatin = function(sentence){
    //split sentence into an array
    var sentenceArray = sentence.split("");

    //Add "ay" to the end of single-letter words beginning with a vowel.
    if (vowel.includes(sentenceArray[0])){
      sentenceArray.push("ay");
    }
      return sentenceArray;
  }

  //User Interface Logic
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //grab user input
    var sentence = $("#userSentence").val();

    console.log(toPigLatin(sentence));

  });

});
