export function sum(x, y) {
  return x + y;
}
export const pi = 3.141593;



function v1() { console.log('f1...') }
function v2() { console.log('f2...') }


export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
}