var jsonStringify = function(object) {
  if (typeof object === 'string') {
    return '"' + object + '"';
  } else if (typeof object === 'number' || typeof object === 'boolean' || object === null) {
    return String(object);
  } else if (Array.isArray(object)) {
    var arrayElements = object.map(jsonStringify).join(',');
    return '[' + arrayElements + ']';
  } else if (typeof object === 'object') {
    var objectProperties = Object.keys(object).map(function(key) {
      var propertyValue = jsonStringify(object[key]);
      return '"' + key + '":' + propertyValue;
    }).join(',');
    return '{' + objectProperties + '}';
  }
};
