$(function() {
  
    let pet_info = {
      "name" : "Shelly",
      "clean": 6,
      "happiness": 0
    }
    
    checkAndUpdatePetInfoInHtml();
    
    $('.treat-button').click(clickedTreatButton);
    $('.clean-button').click(clickedCleanButton);
    
    function clickedTreatButton() {
      alert("You and Shelly ate some yummy fish");
      pet_info['happiness'] = pet_info['happiness'] + 1;
      pet_info['clean'] = pet_info['clean'] - 0.5;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      pet_info['happiness'] = pet_info['happiness'] + 2;
      pet_info['clean'] = pet_info['clean'] - 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedCleanButton() {
      alert("You cleaned up some garbage with Shelly. Shelly was very grateful.");
      pet_info['happiness'] = pet_info['happiness'] + 1;
      pet_info['clean'] = pet_info['clean'] + 3;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info['clean'] < 1) {
        pet_info['clean'] = 1;
      }
    }
    
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.clean').text(pet_info['clean']);
      $('.happiness').text(pet_info['happiness']);
    }
  })
    function welcome() {
      var score = 0;
           confirm("Shelly would like to play a game");
        var retVal = prompt("Do you want to play? Enter yes or no");
       if( retVal == "yes" ){
        score = score + 1
          alert("Shelly is excited to play");
       }else{
          alert("Shelly frowns in disappointment, too bad you must play anyways");
          score = score - 1
       }
    //Question 1
       var retVal = prompt("How much of the Earth’s surface is covered by the ocean?\n(a) 51%\n\(b) 71%\n(c) 78%\n(d) 83%");
       if( retVal == "c" ){
        score++
          alert("Correct, Shelly is proud of you");
       }else{
        score = score - 1
          alert("Wrong, Shelly laughs at you");
       }
    //Question 2
       var retVal = prompt("How deep is the ocean’s deepest canyon, the Mariana Trench?\n(a) 1 mile\n(b) 3 miles\n(c) 5 miles\n(d) 7 miles");
       if( retVal == "c" ){
        score = score + 1
          alert("Correct, Shelly is impressed");
       }else{
        score = score - 1
          alert("Wrong, Shelly looks at you in disappointment");
       }
    //Question 3
       var retVal = prompt("The ocean is home to how many known species?\n(a) 26,000\n(b) 226,000\n(c) 116,000\n(d) 566,000");
       if( retVal == "b" ){
        score = score + 1
          alert("Correct, Shelly splashes in excitement");
       }else{
        score = score - 1
          alert("Wrong. Shelly gives you a look");
       }
    //Question 4
       var retVal = prompt("What is one of the biggest threats to our oceans?\n(a) Overfishing\n(b) Pollutants\n(c) Sandcastles\nd) Sharks");
       if( retVal == "b" ){
        score = score + 1
          alert("Correct, Shelly looks happy");
       }else{
        score = score - 1
          alert("Wrong. Shelly is falling asleep");
       }
    //Question 5
       var retVal = prompt("How much plastic waste ends up in the ocean each year?\n(a) 20 million tons\n(b) 18 million tons\n(c) 14 million tons\n(d) 1000 tons");
       if( retVal == "c" ){
        score = score + 1
          alert("Correct, Shelly is impressed.");
       }else{
        score = score - 1
          alert("Wrong. Shelly gives you a look.");
       }
    //Question 6
       var retVal = prompt("What pollutants in the ocean should we focus on cleaning up?\n(a) Oil Spills\n(b)Plastic Garbage\n(c) Fishing Nets\n(d) All of the Above");
       if( retVal == "d" ){
        score = score + 1
          alert("Correct, Shelly gives a nod of approval.");
       }else{
        score = score - 1
          alert("Wrong. Shelly is offended");
       }
    //Prize
       var retVal = prompt("Final Question: Do you love Shelly? Enter yes or no");
       if( retVal == "yes" ){
          alert("Shelly is overjoyed and gives you a hug");
          score = score + 3
       }else{
          alert("Shelly is heartbroken, and may not forgive you");
          score = score - 12
       }
       alert(score);
      document.getElementbyClassName("score").innerHTML = "score:" + score;
    }
  