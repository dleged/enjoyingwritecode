//修饰类
function testable(isTestable) {
	return function (target) {
		target.isTestable = isTestable;
	}
}

@testable(true)
class MyTestableClass { }
MyTestableClass.isTestable // true

@testable(false)


//修饰类方法
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;
	debugger
  descriptor.value = function() {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

	debugger
  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
