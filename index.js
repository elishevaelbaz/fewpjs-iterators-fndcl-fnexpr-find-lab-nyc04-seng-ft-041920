const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArr){
  let result = objArr.find(function(obj) { return obj.result === "W"})
  return !!result ? result.year : undefined
}