var net = require('net')
var strftime = require('strftime')

// EXECUTION HOOK
main()

// BODY
function main(){
  var port = +process.argv[2]
  if ( isNaN( port ) ) 
    return console.error( "You must provide a valid port number as an argument." )
  var server = net.createServer( function( socket ) {
    data = strftime( '%F %H:%M', new Date() )
    socket.end(data + '\n')
  })
  server.listen(port) 
}
