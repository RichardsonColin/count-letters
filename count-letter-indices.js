function countLetters(string){
  var noSpaceString = string.toLowerCase();
  console.log(noSpaceString);
  var outputObject = {};

  for(index in noSpaceString){
    if(outputObject[noSpaceString[index]] === undefined){
      if (noSpaceString[index] === " ")
        continue;
      outputObject[noSpaceString[index]] = {
        frequency: 1,
        indexes: [index]
      };
    } else {
      outputObject[noSpaceString[index]]["frequency"] += 1;
      outputObject[noSpaceString[index]]["indexes"].push(index);
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));