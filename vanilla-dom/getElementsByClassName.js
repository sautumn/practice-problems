unction getElementsByClassName(className, element=document.body, matchingElements=[]){
  //check the classList for the first element
  if (element.className.indexOf(className) > -1){
    matchingElements.push(element);
  }
  if (element.children){
    for (var i=0; i < element.children.length; i++) {
      getElementsByClassName(className, element.children[i], matchingElements);
    }
  }
  return matchingElements;
}


console.log(getElementsByClassName('somediv'))
