"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _inherits(subClass, superClass) {
  // 父类必须是 null 或者函数
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 使用父类的显式原型创建了一个对象(并且使用属性描述符定义了constructor)，赋值给子类的显式原型
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  // 不能修改子类的显式原型
  Object.defineProperty(subClass, "prototype", { writable: false });
  // 设置子类的隐式原型为父类，使得子类可以继承父类的类方法(静态方法)
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/** 设置某个对象 o 的隐式原型为 p */
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    // 获取子类的隐式原型，即父类(通过 _setPrototypeOf 函数绑定)
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

/** 获取某个对象的隐式原型，为不同的浏览器做兼容处理 */
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

/** 构造函数调用方式检查 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/** 批量定义属性描述符 */
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
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

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(
    Person,
    // Person的实例属性、方法
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
    // Person的静态属性、方法
    [
      {
        key: "randomPerson",
        value: function randomPerson() {},
      },
    ]
  );

  return Person;
})();

/*
  为什么要搞一个IIFE将Person以参数的形式传进去，而不是直接在函数内部使用上面声明的Person呢？
  
  如果函数内引用的上面的Person，就会形成闭包，这样就不是纯函数了，会影响tree-shaking
 */
var Student = /*#__PURE__*/ (function (_Person) {
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, sno, score) {
    var _this;

    _classCallCheck(this, Student);

    // 借用构造函数
    _this = _super.call(this, name, age);
    _this.sno = sno;
    _this.score = score;
    return _this;
  }

  _createClass(
    Student,
    // Student的实例属性、方法
    [
      {
        key: "studying",
        value: function studying() {},
      },
    ],
    // Student的静态属性、方法
    [
      {
        key: "randomStudent",
        value: function randomStudent() {},
      },
    ]
  );

  return Student;
})(Person);

var stu = new Student("zb", 24, "10001", 100);
