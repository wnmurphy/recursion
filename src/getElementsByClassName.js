// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var docElements = document.getElementsByTagName('*');  
  docElements = Array.prototype.slice.call(docElements); 
  
  var results = [];

  function matchFinder(arr){
      for(var i = 0; i < arr.length; i++){
        if(arr[i].className.indexOf(className) > -1){
          results.push(arr[i]);
        }
        if(Array.isArray(arr[i])){
          matchFinder(arr[i]);
        }
      }
  }
  matchFinder(docElements);
  return results;
};