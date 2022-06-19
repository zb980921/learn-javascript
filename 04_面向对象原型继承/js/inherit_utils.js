// 创建对象的过程
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

// 将子类和父类联系在一起
// 寄生式函数
function inherit(Subtype, Supertype) {
  Subtype.prototype = createObject(Supertype.prototype)
  Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
}
