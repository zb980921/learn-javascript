var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }


person1.foo1(); // 隐式绑定 person1
person1.foo1.call(person2); // 显式绑定 person2

person1.foo2(); // 上层作用域查找 window
person1.foo2.call(person2); // 上层作用域查找 window

person1.foo3()(); // 默认绑定 window
person1.foo3.call(person2)(); // 默认绑定 window
person1.foo3().call(person2); // 显示绑定 person2

person1.foo4()(); // 上层作用与查找 person1
person1.foo4.call(person2)(); // 上层作用域查找 person2
person1.foo4().call(person2); // 上层作用域查找 person1
