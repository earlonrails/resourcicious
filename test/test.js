'use strict';

var resourcicious = require('../');
var request       = require('request');
var emptyCallback;

describe('resourcicious', function () {
  beforeEach(function() {
    emptyCallback = function(){};
  });

  describe('#all', function () {
    it('should call request.get with no id', function () {
      spyOn(request, 'get');
      resourcicious.all({}, emptyCallback);
      expect(request.get).toHaveBeenCalledWith(
        'http://api.people.com:3000/resource.json',
        {},
        emptyCallback
      );
    });
  });

  describe('#find', function () {
    it('should call request.get with an id', function () {
      spyOn(request, 'get');
      resourcicious.find(123, {}, emptyCallback);
      expect(request.get).toHaveBeenCalledWith(
        'http://api.people.com:3000/resource/123.json',
        {},
        emptyCallback
      );
    });
  });

  describe('#create', function () {
    it('should call request.post with an object to create', function () {
      spyOn(request, 'post');
      var resourceObject = {
        name: "foo",
        bar: "baz",
        count: 456
      };
      resourcicious.create(resourceObject);
      expect(request.post).toHaveBeenCalledWith(
        {
          url: 'http://api.people.com:3000/resource/',
          form: {
            resource: {
              name: 'foo',
              bar: 'baz',
              count: 456
            }
          }
        }
      );
    });
  });

  describe('#update', function () {
    it('should call request.put with an object to update', function () {
      spyOn(request, 'put');
      var resourceObject = {
        name: "foo",
        bar: "baz",
        count: 456,
        id: 123
      };
      resourcicious.update(resourceObject);
      expect(request.put).toHaveBeenCalledWith(resourceObject);
    });
  });

  describe('#remove', function () {
    it('should call request.del with and id to delete', function () {
      spyOn(request, 'del');
      resourcicious.remove(123, {}, emptyCallback);
      expect(request.del).toHaveBeenCalledWith(
        'http://api.people.com:3000/resource/123.json',
        {},
        emptyCallback
      );
    });
  });
});
