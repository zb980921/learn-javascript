var name = 'window'

var person = {
  name: 'zb',
  say: function () {
    console.log(this.name)
  },
}

function say() {
  var s = person.say
  s() // 'window, 默认绑定
  person.say() // 'zb', 隐式绑定
  ;(person.say)() // 'zb', 隐式绑定，同上
  ;(b = person.say)() // 'window', 间接函数引用, 默认绑定，相当于 s()
}

say()
