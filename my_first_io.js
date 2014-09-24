// GLOBAL VARS
var fs = require('fs')

// EXECUTION HOOK
shortMain()
// longMain()

// BODY -- SHORT VERSION //
function shortMain(){
  var contents = fs.readFileSync(process.argv[2]).toString()
  var lineCount = contents.split('\n').length - 1
  console.log(lineCount)
}

// BODY -- LONG VERSION (PURE FUNCTIONAL) //

function longMain(){
  // input: Str (valid filepath)
  // output: Int (number of new lines in file)
  filePath = getFilePath()
  buffer = bufferFrom(filePath)
  str = strFrom(buffer)
  arr = arrFrom(str)
  newLineCount = countFrom(arr)
  
  console.log(newLineCount)
}

function getFilePath(){
  // input: console input (implicit)
  // output: Str
  return process.argv[2] // store first argument passed in command line
}

function bufferFrom(filePath){
  // input: Str
  // output: Buffer Obj
  return fs.readFileSync(filePath)
}

function strFrom(buffer){
  // input: Buffer Obj
  // output: Str
  return buffer.toString()
}

function arrFrom(str){
  // input: Str
  // output: Arr
  return str.split('\n')
}

function countFrom(arr){
  // input: Arr
  // output: Int
  return arr.length - 1 // subtract to account for fact that last line doesn't have '\n' char
}



