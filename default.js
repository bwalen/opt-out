var listOfItems = ["trump", "bieber", "Bieber", "Trump", "Kanye", "kanye", "Kardashian", "kardashian","TRUMP"];
start(listOfItems);

window.addEventListener("load", function(e){
  start(listOfItems);
  watcher();
});

function watcher(){
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation) {
      start(listOfItems);
    });
  });
  observer.observe(document, {childList:true,subtree: true});
}

function start(listOfItems){
  removeAllElements(searchElements(document.getElementsByTagName("p"),listOfItems));
  removeAllElements(searchElements(document.getElementsByTagName("li"), listOfItems));
  removeAllElements(searchElements(document.getElementsByTagName("a"),listOfItems));
  removeAllElements(searchElements(document.getElementsByTagName("span"),listOfItems));
  searchPictureNames(listOfItems);
  searchLinks(listOfItems);
}

function searchElements(arrayOfItems, listOfItems){
  var cleanedList = [];
  for(var j = 0; j < listOfItems.length; j++){
    for(var i = 0; i < arrayOfItems.length; i++){
      if(s.include(arrayOfItems[i].textContent,listOfItems[j])){
        cleanedList.push(arrayOfItems[i]);
      }
    }
  }
  console.log(cleanedList);
  return cleanedList;
}

function searchPictureNames(listOfItems){
  var cleanedList = [];
  var picturesList = document.getElementsByTagName("img");
  for(var j = 0; j < listOfItems.length; j++ ){
    for (var i = 0; i < picturesList.length; i++){
      if(s.include(picturesList[i].src,listOfItems[j])){
        removeElement(picturesList[i]);
      }
    }
  }
}

function searchLinks(listOfElements){
  var cleanedList = [];
  var linkList = document.getElementsByTagName("a");
  for(var j = 0; j<listOfElements.length; j++){
    for(var i = 0; i < linkList.length; i++){
      if(s.include(linkList[i].href,listOfItems[j])){
        removeElement(linkList[i]);
      }
    }
  }
}

function removeAllElements(listOfElements){
  if(listOfElements.length > 0){
    for(var i = 0; i < listOfElements.length; i++){
      removeElement(listOfElements[i]);
    }
  }
}

function removeElement(element){
  if(!element.nextSibling && !element.previousSibling){
    element.parentNode.parentNode.removeChild(element.parentNode);
  }
  else if(element.parentNode){
    element.parentNode.removeChild(element);
  }
}
