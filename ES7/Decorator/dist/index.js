"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2, _desc, _value, _class3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//修饰类
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

var MyTestableClass = (_dec = testable(true), _dec(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class);

MyTestableClass.isTestable; // true

//修饰类方法
var Math = (_dec2 = testable(false), _dec2(_class2 = (_class3 = function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return Math;
}(), (_applyDecoratedDescriptor(_class3.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class3.prototype, "add"), _class3.prototype)), _class3)) || _class2);


function log(target, name, descriptor) {
  var oldValue = descriptor.value;
  debugger;
  descriptor.value = function () {
    console.log("Calling " + name + " with", arguments);
    return oldValue.apply(this, arguments);
  };

  debugger;
  return descriptor;
}

var math = new Math();

// passed parameters should get logged now
math.add(2, 4);