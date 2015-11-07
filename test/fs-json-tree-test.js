var fs = require('fs');
var expect = require('chai').expect;
var fsJsonTree = require('../lib/fs-json-tree.js');

describe('FS-JSON-TREE', function () {

    it('should create a folder', function () {
      expect(fs.existsSync('./public')).to.be.true;
    });

    it('should create a nested folder', function () {
      expect(fs.existsSync('./public/js/')).to.be.true;
    });

    it('should create a file', function () {
      expect(fs.existsSync('./public/js/main.js')).to.be.true;
    });

    it('should create a file content', function () {
      fs.readFileSync('./public/js/main.js', 'utf-8').should.equal('javascript');
    });

    it('should overwrite a file', function () {
      fs.readFileSync('./public/js/main.js', 'utf-8').should.equal('overwrite javascript');
    });

});
