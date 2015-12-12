// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

//Goal: take a string (json), iterate through it, and convert it into returned objects.

  // handle string
  	// handle escape characters:
  	/*
	    \r - carriage return
	    \n - newline
	    \t - tab
	    \\ - backslash
	    \' - single quote
	    \" - double quote
	*/

  // handle number
  
  // handle true
  
  // handle false
  
  // handle null
  
  // handle arrays
  	// when you find [, create a new array, and recursively call parseJSON
  	// 

  // handle objects
  	// when you find {, recursively call parseJSON

};

str = ;

parseJSON(str);
JSON.parse(str);