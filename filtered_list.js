// GLOBAL
var fs = require('fs')
var _ = require('underscore')
var path = require('path')

// EXECUTION HOOK
main()

// BODY
function main(){
  // input: Str (directory name), Str (extension name filter)
  // does: 
    // (1) retrieves list of filnames in directory
    // (2) filters to file names with extensions matching filters
    // (3) prints list of filtered filenames to console, 1 per line
  var dirName = process.argv[2]
    , filter = process.argv[3]
  fs.readdir(dir, function(err, list){
    if (err) throw err
    var fileNames = applyFilter(list, filter)
    console.log(fileNames.join('\n'))
  })
}

function applyFilter(list, filter){
  // input: Arr of Strs (filepaths)
  // output: Arr of Strs (filepaths with extensions matching filter)
  var arr = []
  _.each(list, function(fileName){
    if ( path.extname(fileName) === '.' + filter){
      arr.push(fileName)
    }
  })
  return arr
}