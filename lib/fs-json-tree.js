'use strict';

var fs = require('fs');
var fsJsonTree = module.exports = {};

function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn.apply(fn.context, fn.args);
  }
  return fn;
}

fsJsonTree.parseData = function(data){

  var cache = {};

  function parse(node, parent){
    for (var prop in node){
      if (node[prop] instanceof Array){
        var parentNode = node.name || '';
        for(var i = 0; i < node[prop].length; i++){
          var nextNode = node[prop][i];
          var itemName = nextNode.name;

          //console.log(444444,itemName,parentNode, cache);

          if(Array.isArray(cache[parentNode])){
            cache[parentNode].push(parentNode);
            //console.log(111111);
          }
          else{
            cache[parentNode] = [];
            //console.log(222222);
          }

          console.log(333333,itemName, parentNode);

          trampoline(parse(nextNode, parentNode, itemName));
        }
      }
    }
  }
  return trampoline(parse(data));
};
