$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        
        var myFavoriteThings = [];
            myFavoriteThings.push("Days Off ");   
            myFavoriteThings.push("Sleeping "); 
            myFavoriteThings.push("Streaming Movies / TV "); 
            myFavoriteThings.push("No Phone Calls "); 

        //Write your decision structure between this comment...
        
        if (letterGrade == "A"){
            $('#decision-holder').text("Grade range for A: 90% to 100%");
        } 
        else if (letterGrade == "B"){
            $('#decision-holder').text("Grade range for B: 80% to 90%");
        }
        else if (letterGrade == "C"){
            $('#decision-holder').text("Grade range for C: 70% to 80%");
        }
        else if (letterGrade == "D"){
            $('#decision-holder').text("Grade range for D: 60% to 70%");
        }
        else if (letterGrade == "F"){
            $('#decision-holder').text("Grade range for F: Less than 60%");
        }
        else {
            $('#decision-holder').text("Error: invalid value input!");
        };

        //...and this comment


        //Now, write a for, while, OR do-while loop between this comment...
        for(var i = 0; i < myFavoriteThings.length; i++){
            $('#loop-output').append(myFavoriteThings[i] + "<br>");
        };
        //...and this comment


        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...
        $.each(myFavoriteThings, function(index, thing){
            $('#each-output').append(thing + "<br>");
        });
           
        //...and this comment

    });
});