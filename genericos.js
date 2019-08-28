function randomIntElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomIntElem(positions);
