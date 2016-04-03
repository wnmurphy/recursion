var stringifyJSON = function (obj) {
  var str = '';

  // handle string
  if (Object.prototype.toString.call(obj) === '[object String]') {
    str += '"' + obj + '"';

  // handle number
  } else if (Object.prototype.toString.call(obj) === '[object Number]') {
    str += obj.toString();

  // handle true
  } else if(obj === Boolean(true)) {
    str+= 'true';

  // handle false
  } else if(obj === Boolean(false)) {
    str+= 'false';

  // handle null
  } else if (Object.prototype.toString.call(obj) === '[object Null]') {
    str+= 'null';
  }

  // handle arrays
  if (Object.prototype.toString.call(obj) === '[object Array]') {

    // handle empty array
    if (obj.length === 0) {
      str += '[]';
    } else {
      str += '[';
      for (var i = 0; i < obj.length; i++) {
        str += stringifyJSON(obj[i]) + ',';
      }
      str += ']';
    }
  }

  // handle objects
  if (Object.prototype.toString.call(obj) === '[object Object]') {

    // handle empty objects
    if (Object.keys(obj).length === 0) {
      str += '{}';
    } else {
      str+= '{';
      for(var key in obj){

        // handle functions
        if (typeof obj[key] === 'function') {
          continue;
        }

        // handle undefined
        if (typeof obj[key] === 'undefined') {
          continue;
        }

        str += '"' + key + '":';
        str += stringifyJSON(obj[key]) + ',';
      }
    str += '}';
    }
  }

  // Loop through string, and remove extra commas.
  str = str.replace(/,}/, '}');
  str = str.replace(/,]/, ']');

  return str;
};
