var listOfItems = ["trump","Trump","TRUMP"];
start(listOfItems);

window.addEventListener("load", function(e){
  start(listOfItems);
  watcher();
});

function watcher(){
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation) {
      if(mutation.addedNodes[0]){
        for(var i = 0; i < mutation.addedNodes.length; i++){
          processElements(mutation.addedNodes[i]);
        }
      }
    });
  });
  observer.observe(document, {childList:true,subtree: true});
}

function start(listOfItems){
  removeAllElements(document.querySelectorAll("p,li,a,span,article,h1,h2,h3,h4,h5,img"));
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

function removeAllElements(listOfElements){
  if(listOfElements.length > 0){
    for(var i = 0; i < listOfElements.length; i++){
      processElements(listOfElements[i]);
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

function processElements(element){
  if(element.tagName != "SCRIPT"){
    for(var i = 0; i < listOfItems.length; i++){
      if(element.src){
        if(s.include(element.src,listOfItems[i]) || s.include(element.title,listOfItems[i]) || s.include(element.alt,listOfItems[i])){
          removeElement(element);
        }
      }
      if(element.textContent){
        if(s.include(element.textContent,listOfItems[i])){
          removeElement(element);
        }
      }
      if(element.href){
        if(s.include(element.href,listOfItems[i])){
          removeElement(element);
        }
      }
    }
  }
}
