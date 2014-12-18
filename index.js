'use strict';

var request  = require('request');
var resource = {
  site: "http://api.people.com:3000/",
  singular: "resource",
  path: "resource/",
};

resource.find = function (id) {
  return request.get(resource.site + resource.path + id + ".json");
};

resource.create = function (attributes) {
  var postData = {};
  postData[resource.singular] = attributes;
  return request.post(resource.site + resource.path, postData);
};

resource.update = function (attributes) {
  var putData = {};
  putData[resource.singular] = attributes;
  return request.put(resource.site + resource.path, putData);
};

resource.delete = function (id) {
  return request.del(resource.site + resource.path + id + ".json");
};

module.exports = resource;