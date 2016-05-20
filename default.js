var listOfItems = ["trump", "bieber", "Bieber", "Trump", "Kanye", "kanye", "Kardashian", "kardashian","TRUMP"];
start(listOfItems);

window.addEventListener("load", function(e){
  start(listOfItems);
  watcher();
});

function watcher(){
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation) {
      if(mutation.addedNodes[0]){
        processMutations(mutation.addedNodes[0]);
      }
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
  return cleanedList;
}

function searchPictureNames(listOfItems){
  var cleanedList = [];
  var picturesList = document.getElementsByTagName("img");
  for(var j = 0; j < listOfItems.length; j++ ){
    for (var i = 0; i < picturesList.length; i++){
      if(s.include(picturesList[i].src,listOfItems[j]) || s.include(picturesList[i].title,listOfItems[j]) || s.include(picturesList[i].alt,listOfItems[j])){
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
  if(element.previousSibling==null && element.nextSibling==null && element.parentNode && element.parentNode.parentNode){
    removeElement(element.parentNode);
  }
  if(element.parentNode){
    element.parentNode.removeChild(element);
  }
}

function processMutations(element){
  if(element.tagName != "SCRIPT" && element.tagName != "IFRAME"){
    for(var i = 0; i < listOfItems.length; i++){
      if(element.src){
        if(s.include(element.src,listOfItems[i]) || s.include(element.title,listOfItems[i]) || s.include(element.alt,listOfItems[i])){
          removeElement(element);
        }
      }
      if(element.textContent){
        if(s.include(element.textContent,listOfItems[i])){
          console.log(element);
          removeElement(element);
        }
      }
      if(element.href){
        console.log(element.href);
        if(s.include(element.href,listOfItems[i])){
          console.log(element);
          removeElement(element);
        }
      }
    }
  }
}
