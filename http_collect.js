var bl = require('bl')
  , http = require('http')
  , url = process.argv[2]

http.get(url, function(res){
  res.pipe(bl(function(err, data){
    if (err) 
      return cosole.error(err)
    str = data.toString()
    console.log(str.length)
    console.log(str)
  }))
})