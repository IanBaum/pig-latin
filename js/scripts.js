$(document).ready(function() {
  //Business Logic
  var letter = /[a-zA-Z]/;
  var vowel = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  var count = 0;

  var toPigLatin = function(sentence){
    //split sentence into an array
    var sentenceArray = sentence.split("");

    //Add "ay" to the end of single-letter words beginning with a vowel.
    //Add "ay" to the end of words beginning with a vowel.
    if (vowel.includes(sentenceArray[0])){
      sentenceArray.push("ay");
    }

    else {

      for(var index = 0; index < sentence.length;index++){
        //For words beginning with "qu", move the "u" along with the "q".
        if(sentenceArray[0] === "q" && sentenceArray[1] === "u"){
          sentenceArray.push(sentenceArray[0],sentenceArray[1]);
          sentenceArray.splice(0,2);
        }
        // For words beginning with one consonant, move the first consonant to the end of the word, and add "ay".
        // For words beginning with more than one consonant, move all of the first consecutive consonants to the end, and add "ay".
        else if(!vowel.includes(sentenceArray[0])){
          sentenceArray.push(sentenceArray[0]);
          sentenceArray.splice(0,1)
        }else if(vowel.includes(sentenceArray[0])){
          break;
        }
      }
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
