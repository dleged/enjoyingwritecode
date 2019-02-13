function testable(isTestable) {
	return function (target) {
		target.isTestable = isTestable;
	}
}

@testable(true)
class MyTestableClass { }
MyTestableClass.isTestable // true

@testable(false)
class MyClass { }
MyClass.isTestable // false