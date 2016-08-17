$(document).ready(function() {
  //Business Logic
  var letter = /[a-zA-Z]/;
  var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  var count = 0;

  var toPigLatin = function(sentence){
    //split sentence into an array
    var wordArray = sentence.split(" ");
    //Add "ay" to the end of single-letter words beginning with a vowel.
    //Add "ay" to the end of words beginning with a vowel.
    for(var i = 0; i < wordArray.length; i++){
      var sentenceArray = wordArray[i].split("");
        if (vowel.includes(sentenceArray[0]) && sentenceArray[0] !== "y" && sentenceArray[0] !== "Y"){
          sentenceArray.push("ay");
        }
        else {
          if(sentenceArray[0] === "y" || sentenceArray[0] === "Y"){
            sentenceArray.push(sentenceArray[0]);
            sentenceArray.splice(0,1);
          }
          for(var index = 0; index < sentence.length;index++){
            // If the beginning consonants include "qu", move the "u" along with the "q".
            if(sentenceArray[0] === "q" && sentenceArray[1] === "u"){
              sentenceArray.push(sentenceArray[0],sentenceArray[1]);
              sentenceArray.splice(0,2);
            }
            // For words beginning with one consonant, move the first consonant to the end of the word, and add "ay".
            // For words beginning with more than one consonant, move all of the first consecutive consonants to the end, and add "ay".
            else if(!vowel.includes(sentenceArray[0])){
              sentenceArray.push(sentenceArray[0]);
              sentenceArray.splice(0,1);
            }else if(vowel.includes(sentenceArray[0])){
              break;
            }
          }
          sentenceArray.push("ay");
        }
        $("#translatedSentence").append(sentenceArray.join("") + " ");
    }
    return sentenceArray;
  }

  //User Interface Logic
  $("#userInfo").submit(function(event){
    event.preventDefault();
    //grab user input
    var sentence = $("#userSentence").val();
    $("#translatedSentence").text("");
    toPigLatin(sentence);

  });

});
