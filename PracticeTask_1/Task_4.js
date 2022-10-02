function calculateWordsInString(string) {
    console.log(string.replace(/ +/g, ' ').trim().split(' ').length)
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");