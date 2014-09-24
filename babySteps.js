var sum = 0

process.argv.forEach(function(global, i){
  if( i > 1 ){ sum += Number(global) }
})

console.log(sum)