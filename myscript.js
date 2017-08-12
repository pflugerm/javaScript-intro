function writeResults (result){
    //First, find the empty div where we want to put the answers.
    var resultsDiv = document.getElementById('resultsBox');


    var roundCorner = document.getElementById('coachPic');
    roundCorner.style.borderRadius= "25px";

    var roundCorner = document.getElementById('brendonPic');
    roundCorner.style.borderRadius= "25px";
    //lets say you wanted to round corners for all images. 

// create our image tag with attributes
//var newImg = document.😀createElement('img');
//newImg.src = 'http://placekitten.com/g/500/200';
//newImg.style.border = '1px solid black'; 



//Here, I'm retrieving myBtn that i set up in html.
var button =document.getElementById("myBtn");

function sayHi (event) {
  alert('I am Coach Mcgirk, the soccer comic!');
};   

button.addEventListener("click", sayHi);
button.style.backgroundColor = "green";
button.style.borderRadius= "18px";


var pageBody = document.getElementsByTagName('body')[0];
pageBody.style.backgroundColor = 'red';

//I want the background color of all paragraph tags to be red
//i'm isolating a node when i use getElementsByTagName
var x = document.getElementsByTagName("p");
var i;

//so, i am creating a new variable i. i is given a value of 0/a number (in this case, 
//it refers to the first paragraph tag.)
// i is less than x.length (paragraph.length); add one to i and run it again.
for (i = 1; i < x.length; i++) {
    //paragraph[0,1,2,3, i++]
    x[i].style.backgroundColor = "yellow"; 
}

    //Second, create a new paragraph
    var newParagraph = document.createElement('p');

    //Create a text node, a string of text, to put inside the paragraph.
    var paragraphText = document.createTextNode(result);
        
    //Now, we assemble our results. Put the new text in the new paragraph
    newParagraph.appendChild(paragraphText);

    //Then put it inside the div we found earlier
    resultsDiv.appendChild(newParagraph);
}

writeResults("Hi I'm Coach Mcgirk, the soccer comic");