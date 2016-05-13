var listOfItems = ["trump", "bieber", "Bieber", "Trump", "Kanye", "kanye", "Kardashian", "kardashian","TRUMP"];
var allPs = document.getElementsByTagName("p");
var allSpans = document.getElementsByTagName("span");
var allLinks = document.getElementsByTagName("a");
console.log(searchElements(allPs,listOfItems));
console.log(searchElements(allSpans,listOfItems));
console.log(searchElements(allLinks,listOfItems));
removeAllElements(searchElements(allLinks,listOfItems));
removeAllElements(searchElements(allSpans,listOfItems));


function searchElements(arrayOfItems, listOfItems){
  var cleanedList = [];
  for(var j = 0; j < listOfItems.length; j++){
    for(var i = 0; i < arrayOfItems.length; i++){
      if(s.include(arrayOfItems[i].textContent,listOfItems[j])){
        cleanedList.push(arrayOfItems[i]);
      }
    }
  }
  return (cleanedList);
}

function removeAllElements(listOfElements){
  for(var i = 0; i < listOfElements.length; i++){
    removeElement(listOfElements[i]);
  }
}


function removeElement(element){
  if(element.parentNode){
    element.parentNode.removeChild(element);
  }
}
