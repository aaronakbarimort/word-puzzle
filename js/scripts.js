//Problem: replace vowels in userinput with "-", and output the result

// solution:
//   convert input string into an array,because the array is is mutable
//   repalce target vowels with '-'
//   output the result string

// business logic
// helper function to replace vowels
var replaceVowels = function(vowels, aString){
  var aArray = aString.split("");
  for(var i = 0; i < aArray.length; i ++){
    if(vowels.indexOf(aArray[i]) !== -1){
      aArray[i] = "-";
    }
  }
  return aArray.join("");
}


// user interface logic
$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    var vowels = "aeiouAeiou";
    var userInput = $("#userInput").val();

    // loop trough the input array and replace vowels with '-'
    if(userInput){
      var outPut = replaceVowels(vowels, userInput);
      $(".output").append("<p class='lead'>Your input string without vowels as below: <br>" + "</p>" + outPut);
    }
    else{
      $(".output").append("<p class='lead'>Please enter something.</p>");
    }
    $("#clear").click(function() {
      location.reload();
    });
  });
});
