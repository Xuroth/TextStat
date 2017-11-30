function calculate(display = true){
    //Set initial variables
    var inputValue = document.getElementById('inputText').value;
    var inputArray = [];
    var sentenceArray = [];
    var word = '';

    var textStats = new Object();
    textStats.wordCount = 0;
    textStats.sentenceCount = 0;
    textStats.spaceCount = 0;
    textStats.avgWords = 0;
    

    for (i = 0; i < inputValue.length; i++) {
        word = word + inputValue[i];

        if( (inputValue[i] === ' ') || (i === inputValue.length - 1) ) {
            inputArray.push(word);
            word = '';

            if ( inputValue[i] === ' ' ) {
                textStats.spaceCount++;
            }
        }
    }

    sentenceArray = inputValue.match(/[^\.!\?]+[\.!\?]+/g);

    textStats.sentenceCount = sentenceArray.length;
    textStats.wordCount = inputArray.length;
    textStats.avgWords = textStats.wordCount / textStats.sentenceCount;

    if ( display === true ){
        displayStats(textStats);
    }
}

function displayStats(textStats = false, consoleOutput = false) {
    if ( textStats === false ){
        console.log('Unable to calculate statistics!');
        exit();
    }
    else
    {
        if ( consoleOutput === true ) {
            console.log('Words: ' + textStats.wordCount + ' | Sentences: ' + textStats.sentenceCount + ' | Spaces: ' + textStats.spaceCount + ' | Average W/S: ' + textStats.avgWords);
        
        }
    }
}