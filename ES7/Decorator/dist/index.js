"use strict";

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testable(isTestable) {
	return function (target) {
		target.isTestable = isTestable;
	};
}

var MyTestableClass = (_dec = testable(true), _dec(_class = function MyTestableClass() {
	_classCallCheck(this, MyTestableClass);
}) || _class);

MyTestableClass.isTestable; // true

var MyClass = (_dec2 = testable(false), _dec2(_class2 = function MyClass() {
	_classCallCheck(this, MyClass);
}) || _class2);

MyClass.isTestable; // false