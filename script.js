'use strict';

var userAtr = userAtr || null;
var wrapP = buildWrapper("P");
var wrapH1 = buildWrapper("H1");

function buildWrapper(tag) {

  function formString(text, atr) {
    var newAtr = '';
    for (var key in atr) {
      newAtr += (' ' + key + '=' + "'" + changeSymbols(atr[key]) + "'");
    }
    
    var newText = changeSymbols(text);

    function changeSymbols(string) {

      var newString = '';
      for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        switch (letter) {
          case '<':
            newString += '&lt;';
            continue;
          case '>':
            newString += '&gt;';
            continue;
          case '"':
            newString += '&quot;';
            continue;
          case '&':
            newString += '&amp;';
            continue;
          case "'":
            newString += '&apos;';
            continue;
          default:
            newString += letter;
            continue;
        }
      } return newString;
    }

    var content = '<' + tag.toLowerCase() + newAtr + '>' + newText + '</' + tag.toLowerCase() + '>';
    return content;
  }
  return formString;
}


console.log(wrapP("Однажды в <студёную> зимнюю пору", { lang: "ru", title: "M&M's" }));
console.log(wrapH1("СТИХИ", { align: "center", title: "Все мои стихи" }));