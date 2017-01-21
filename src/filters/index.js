const urlParser = document.createElement('a')

export function domain (url) {
  urlParser.href = url
  return urlParser.hostname
}

export function fromNow (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }

    return time + label + 's';
}

export function toString (value) {
  if(value.constructor === Array) {
    return value.map(String);
  }
  
  return value.toString()
}

export function toInt(value) {
  return parseInt(value)
}

export function hifen(input) {
  // return value.match(/\d{3}(?=\d{2,3})|\d+/g).join("-")
  var format = [3];
  var sep = "-";

  var output = "";
  var idx = 0;
  for (var i = 0; i < format.length && idx < input.length; i++) {
    output += input.substr(idx, format[i]);
    if (idx + format[i] < input.length) output += sep;
    idx += format[i];
  }

  output += input.substr(idx);

  console.log(output)

  return output;
}