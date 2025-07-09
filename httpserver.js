const http = require('http');

const port = process.env.Port||3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html')
    res.end('<h1>this is code with deepak</h1><p>way to rocl</p>')

})
server.listen(port,()=>{
    console.log('Server is listening in port ${port}');
});    