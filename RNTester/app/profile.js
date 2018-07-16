/**
 * Created by LeeHow on 28/04/2017.
 */

//
// export var firstName = 'michael'
// export var lastName = 'Jackson'
// export var year = 1958


var firstName = 'michael'
var lastName = 'Jackson'
var year = 1958

export { firstName, lastName, year }

export function multiply(x, y) {
  return x * y
}

function func1() {

}

function func2() {

}

export {
  func1 as f1,
  func2 as f2,
  func2 as function2
}