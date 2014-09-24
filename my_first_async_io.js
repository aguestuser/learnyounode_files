// ~/aguest/Dropbox/code/js/node/learnyounode/

// GLOBALS
var fs = require('fs')

// EXECUTION HOOK
main()

// BODY

function main(){
  var filePath = process.argv[2]
  fs.readFile( filePath, 'utf8', function(err, contents){
    if (err) throw err
    var lineCount = contents.split('\n').length - 1
    console.log(lineCount)
  } )
}