/* Welcome to the show, ladies and gentlemen! For your viewing pleasure, I present to you 
Module ! Final Project Super Calculator TextStat with Style Changing action! 
~cue theme song! */

//And now, without further ado, interruption or filibustering - the code!
var uglyMode = 0; //First off, set uglyMode off! No one likes it. It's literally just there to meet a VERY specific requirement.
var fullDisplayMode = 0;

function calculate(){
    //Get all the things
    var outputBox = document.getElementById('inputText'); //Textarea element
    var inputValue = outputBox.value; //Now just the data (so I don't have to select it twice...)
    var resultBox = document.getElementById('resultBox'); //Just to manipulate the uglyMode version of stats display.
    var results = document.getElementsByClassName('results'); //I *may* be playing around here by using different selector methods even though the normal styl works perfectly well.
  
    //Initialize variables
    var inputArray = []; //We cannot use .split()... I know, right?!
    var sentenceArray = []; //Technicalities! I can't believe it's not .split()!
    var wordCount = 0; //Ye olde word counter
    var sentenceCount = 0; //Ye olde sentence counter
    var spaceCount = 0;//I'd like to buy 1 space! Ok, reference aside, counts spaces. 
    var avgWords = 0; //Super hard incredible math will be saved here!
    var word = ''; //I would say something here, but word is literally and empty string... so sad...

    //Keep your arms and legs inside the vehicle at all times.
    for (i = 0; i < inputValue.length; i++) {
        //Build words letter-by-letter since we aren't allowed to use .split()... So I *replicated* split(). Didn't actually use it!
        word = word + inputValue[i]; //String that ...string... with moar stringz!!! Or if you prefer, Build a word and get over it.
        
        //Check if character at position i is space or end of input.
        if ((inputValue[i] === ' ') || (i === inputValue.length-1)) {
            //It's alive! Now take it off the assembly line and send it away.
            inputArray.push(word);
            word = '';

            //Ooh, but since the condition checks for either case, I want this next bit to run ONLY if the first condition is true.
            if (inputValue[i] === ' ') {
              spaceCount++; //Got Spaces?
            }
        }
    }
  
    //Note: This is not the split() function, since we are not allowed to use the most efficient method. Granted, it is very similar...
    sentenceArray = inputValue.match(/[^\.!\?]+[\.!\?]+/g); //Aahh! The wonderful flavor of Regex
    sentenceCount = sentenceArray.length; //Count the indices in that nifty array, and voila!
  
    //I am the COUNT! COUNT ARRAY! Oh, not funny? Trying too hard? You've got me.
    wordCount = inputArray.length; 
  
    //DANGER!!!! 
    //Super complicated and hard math. 
    //This equation may actually make you break out in sweat and clutch your head in anguish. 
    //Not for use by children under 6.
    avgWords = wordCount / sentenceCount;
    
    //Build string for console logging and future use. Because we like repea... wait no. We DON'T like repeating ourselves.
    output = 'Words: '+wordCount+'\n Sentences: '+sentenceCount+'\n Spaces: '+spaceCount+'\n Average Words Per Sentence: '+avgWords;

    //Log to console. Why? Force of habit.
    console.log(output);
  
    //Take input value and add it to the end of the document. 
    //Wait, I didn't append! I just changed an existing element (by adding content, see below).
    outputBlock = document.getElementById('textBlock');
  
    //Could have just appended this addon, but felt like doing something different for, you know, STYLE!
    outputBlock.classList.add('textBlock');
    outputBlock.classList.add('animated'); //PRETTY!
    outputBlock.classList.add('fadeIn'); //...Also PRETTY!
    
    //Add the pretty stylized input to the document!
    outputBlock.innerHTML = `<h2>TextStat Analysis</h2><p class="resultList">Words: ${wordCount}</p><p class="resultList">Sentences: ${sentenceCount}</p><p class="resultList">Spaces: ${spaceCount}</p><p class="resultList">Average words per sentence: ${avgWords}</p><hr><h3 class="originalText">Original Text</h3><p class=originalText>${inputValue}</p>`;
    
    /* Also, for the technicality, add the droll output. See how I call each child? I know the weaknesses of this, and wouldn't normally 
        use this style when working with critical info like database results. Actually, from my experience, this is a great way to work 
        with return results of database queries... (though usually in a loop-de-loop!) */
    results[0].innerHTML = `Words: ${wordCount}`;
    results[1].innerHTML = `Sentences: ${sentenceCount}`;
    results[2].innerHTML = `Spaces: ${spaceCount}`;
    results[3].innerHTML = `Average Words per Sentence: ${avgWords}`;
}

//Super Style Changing Action Go!
function uglify() {
  var textBox = document.getElementById('inputText');
  var outputBlock = document.getElementById('textBlock');
  var calcBtn = document.getElementById('calcBtn');
  var htmlBody = document.body;
  var footerBar = document.getElementsByTagName('footer')[0];
  var resultBox = document.getElementById('boringResults');
  var uglyBtn = document.getElementById('uglyBtn');

  //Toggle the style. Unlike me. Can't turn my style off. STYLE!
  if (uglyMode === 0) {
    //So the user can see the evidence of their viscious crime.
    console.log("Turning Ugly Mode on! Ick!");
    uglyMode = 1; //Q.Q
    
    uglyBtn.innerHTML = 'Prettify!'; //Give them the option to right this terrible wrong!
    uglyBtn.classList.remove('uglyBtn');
    uglyBtn.classList.add('prettyBtn'); //Make it tempting.
    textBox.classList.remove('inputText');
    
    calcBtn.classList.remove('btn');
    htmlBody.style.background = '#fff';
    outputBlock.classList.add('hidden');
    resultBox.classList.remove('hidden');
    
    //I know what you clicked!
    footerBar.innerHTML = 'Made begrudgingly ugly by Stephan Franz';
    
  } else if (uglyMode === 1) {
    console.log('Turning Ugly Mode off! Yay!');
    uglyMode = 0;

    uglyBtn.innerHTML = 'Uglify!'; //I mean, I guess. In case you want to see the bland version.
    uglyBtn.classList.add('uglyBtn');
    uglyBtn.classList.remove('prettyBtn');
    textBox.classList.add('inputText');
    
    resultBox.classList.add('hidden');
    calcBtn.classList.add('btn');
    htmlBody.style.background = '#eee'; //W#eee!
    outputBlock.classList.remove('hidden');
    
    //I am Stephan Franz, and I endorse this message.
    footerBar.innerHTML = 'Made with &#10084; by Stephan Franz';
    
  }
}

function removeIntroSection(){
    var introSection = document.getElementById('intro');
    var formSection = document.getElementById('form');
    var analysisSection = document.getElementById('output');
    
    introSection.addEventListener('animationend', function() {

        introSection.parentNode.removeChild(introSection);
        analysisSection.classList.remove('hidden');
        formSection.classList.add('fullDisplayMode');
    }, false);
    introSection.classList.add('fadeOut');
}