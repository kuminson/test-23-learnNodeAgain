let http = require('http')
let url = require('url')

function start (route, handle) {
  function onRequest(request, response) {
    // let postData = ''
    let pathname = url.parse(request.url).pathname
    console.log('request for ' + pathname + ' received')
    // request.setEncoding('utf8')
    // request.addListener('data', (postDataChunk) => {
    //   postData += postDataChunk
    //   console.log('received POST data chunk "' + postDataChunk + '".')
    // })
    // request.addListener('end', () => {
    //   route(handle, pathname, response, postData)
    // })
    route(handle, pathname, response, request)
  }

  http.createServer(onRequest).listen(8888)
  console.log('server has started')
}

exports.start = start