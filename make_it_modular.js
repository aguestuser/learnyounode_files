var doFilter = require('./filter_module')
// console.log(typeof filter)

// EXECUTION HOOK
main()

// BODY
function main(){
  var dir = process.argv[2], filter = process.argv[3]
  doFilter(dir, filter, print)
}

function print(err, list){
  if (err) 
    return console.error("There was an error:", err)
  console.log(list.join('\n'))
}

