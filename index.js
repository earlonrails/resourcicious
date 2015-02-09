'use strict';

var request  = require('request');
var resource = {
  site: "http://api.people.com:3000/",
  singular: "resource",
  path: "resource/",

  all: function (options, callback) {
    return request.get(
      this.site + this.singular + ".json",
      options || {},
      callback || function(){}
    );
  },

  find: function (id, options, callback) {
    return request.get(
      this.site + this.path + id + ".json",
      options || {},
      callback || function(){}
    );
  },

  create: function (attributes, options) {
    var postData = options || {};
    postData["url"] = this.site + this.path
    postData["form"] = {};
    postData.form[this.singular] = attributes;
    return request.post(postData);
  },

  update: function (attributes) {
    var putData = attributes || {};
    putData["url"] = this.site + this.path
    putData["form"] = {};
    putData.form[this.singular] = attributes;
    return request.put(putData);
  },

  remove: function (id, options, callback) {
    return request.del(
      this.site + this.path + id + ".json",
      options || {},
      callback || function(){}
    );
  }
};

module.exports = resource;