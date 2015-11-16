/*jslint vars: true, devel:true, nomen: true, node: true, indent: 4, maxerr: 50*/
/*global describe, it*/
'use strict';

var util = require('util'),
    EventEmitter = require('events').EventEmitter;


function EventSource() {
    if (!(this instanceof EventSource)) {
        return new EventSource();
    }

    EventEmitter.call(this);
}

util.inherits(EventSource, EventSource);


//The are defined in a plugin
EventSource.prototype._write = function (obj) {
  //Write the object to a datastore whether in memory, mongodb, sql, etc.

  //On Write success emit events for register is kicked off

};

//These are defined in a plugin
EventSource.prototype._read = function (obj, cb) {
  //Write code to read data from a source
  // InmemoryArray.find(obj, ()=>(return all data including this after it)
};

//The are defined in a plugin
EventSource.prototype.write = function (obj) {
  this._write(obj);
};

//These are defined in a plugin
EventSource.prototype.read = function (obj, cb) {
  this._read(obj, cb);
};


EventSource.prototype.use = function(plugin, options){
  plugin(options);
};

module.exports = EventSource;
