var _ = require('underscore')
  , bl = require('bl')
  , http = require('http')

main()

function main(){
  var urls = process.argv.slice(2,5)
  , count = 0
  , results = []
  accumulateResults(urls, count, results)
}

function accumulateResults(urls, count, results){
  _.each(urls, function(url, i){
    http.get(url, function(res){
      res.pipe(bl(function(err, data){
        if (err) return console.error(err)
        results[i] = data.toString()
        count ++
        printIfComplete(results, count)
      }))
    })
  })
}

function printIfComplete(results, count){
  if (count == 3) console.log(results.join('\n'))
}
