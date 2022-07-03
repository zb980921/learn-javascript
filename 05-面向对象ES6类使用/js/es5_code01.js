"use strict";

function _classCallCheck(instance, Constructor) {
  // 判断函数执行时的 this
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    // 默认不可枚举
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// 纯函数：相同的输入一定产生相同的输入，并且不会产生副作用
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    // 如果以 `Person()` 的形式调用，严格模式下 this 指向 undefined，会抛出异常
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  /*
    Person.prototype.running = function() {}
    Person.prototype.eating = function() {}
    Person.randomPerson = function() {}
   */

  _createClass(
    Person,
    // 实例属性、方法
    [
      {
        key: "running",
        value: function running() {},
      },
      {
        key: "eating",
        value: function eating() {},
      },
    ],
    // 静态属性、方法
    [
      {
        key: "randomPerson",
        value: function randomPerson() {},
      },
    ]
  );

  return Person;
})();

var p1 = new Person();
