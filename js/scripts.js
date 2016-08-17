$(document).ready(function() {
  //Business Logic
  var letter = /[a-zA-Z]/;
  var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  var isVowel = false;

  var toPigLatin = function(sentence){
    //split sentence into an array
    var sentenceArray = sentence.split("");

    //Add "ay" to the end of single-letter words beginning with a vowel.
    //Add "ay" to the end of words beginning with a vowel.
    if (vowel.includes(sentenceArray[0])){
      sentenceArray.push("ay");
    }
    // For words beginning with one consonant, move the first consonant to the end of the word, and add "ay".
    for (var index = 0; index < vowel.length; index++) {
      if (sentenceArray[0] === vowel[index]){
        isVowel = true;
      }
    }
    if(!isVowel){
      sentenceArray.push(sentenceArray[0]);
      sentenceArray.splice(0,1);
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
