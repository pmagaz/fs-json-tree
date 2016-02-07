'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var fsJsonTree = require('../lib/fs-json-tree.js');

var data = {
  "tree":[
    {
      "name":"public",
      "content":[
        {
          "name":"public.txt",
          "content":"hello!"
        },
        {
          "name":"sass",
          "content":[
            {
              "name":"main.scs",
              "content":"sassss"
            }
          ]
        },
        {
          "name":"css",
          "content":[
            {
              "name":"vendors",
              "content":[
                {
                  "name":"vendor.css",
                  "content":"connteeeent"
                }
              ]
            }
          ]
        },
        {
          "name":"js",
          "content": [
            {
              "name":"main.js",
              "content":"Javascript has you!"
            },
            {
              "name":"angular",
              "content":[
                {
                  "name":"angular-ui.js",
                  "content": "console.log();"
                },
                {
                  "name":"angular-material",
                  "content": [
                    {
                      "name":"angular-checkbox.js",
                      "content": "checkbox"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

describe('FS-JSON-TREE', function () {

  /*fsJsonTree.create(data, function(err, result){

  });*/

  it('should return and array with concatenated recursive paths', function () {
    expect(fsJsonTree.parseData(data)).to.have.length(8);
  })
  /*
  it('should create a folder', function () {
    expect(fs.statSync('./public').isDirectory()).to.be.true;
  });

  it('should create a nested folder', function () {
    expect(fs.statSync('./public/js/').isDirectory()).to.be.true;
  });

  it('should create a file', function () {
    expect(fs.statSync('./public/js/main.js').isFile()).to.be.true;
  });

  it('should create a file content', function () {
    fs.readFileSync('./public/js/main.js', 'utf-8').should.equal('javascript');
  });

  it('should overwrite a file', function () {
    fs.readFileSync('./public/js/main.js', 'utf-8').should.equal('overwrite javascript');
  });
  */
});
