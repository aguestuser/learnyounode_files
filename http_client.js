var http = require('http')

// EXECUTION HOOK
main()

// BODY
function main(){
  var url = process.argv[2]
  http.get(url, function(res){
    res.setEncoding('utf8')
    res.on('error', console.esurror)
    res.on('data', console.log)
  })
}
