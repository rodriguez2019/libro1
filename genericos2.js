function removeChar(theString, theChar) {
    var theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}
