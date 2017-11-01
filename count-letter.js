function countLetters(string){
  var noSpaceString = string.toLowerCase().split(' ').join('');
  console.log(noSpaceString);
  var outputObject = {};

  for(index in noSpaceString){
    if(outputObject[noSpaceString[index]] === undefined){
      outputObject[noSpaceString[index]] = 1;
    } else {
      outputObject[noSpaceString[index]] += 1;
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));