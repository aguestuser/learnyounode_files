// GLOBAL VARS
var fs = require('fs')
var _ = require('underscore')
var path = require('path')

// MAIN FUNCTION
module.exports = function(dir, filter, callback){
  // input: Str, Str, Function
  // does: 
    // (1) retrieves list of filnames in directory
    // (2) filters to file names with extensions matching filters
  // output: callback with either error message or Array of Strs
  fs.readdir(dir, function(err, files){
    if (err) 
      return callback(err)
    filterdFiles = applyFilter(files, filter)
    callback(null, filterdFiles)
  })
}

// HELPERS
function applyFilter(files, filter){
  // input: Arr of Strs (filepaths)
  // output: Arr of Strs (filepaths with extensions matching filter)
  return _.filter(files, function(file){  
    return path.extname(file) === '.' + filter
  })
}