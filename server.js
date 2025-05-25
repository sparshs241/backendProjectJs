const http=require('http')
const hostName='127.0.0.1'

const port='3000'

const server=http.createServer((req,res)=>{

    if (req.url==="/")
    {
        res.statusCode=200
        res.setHeader('Content-type','text/plain')
        res.end("Hello from mountains")
    }
    else if (req.url ==='/kasol')
    {
        res.statusCode=200
        res.setHeader('Content-type','text/plain')
        res.end("Hello from mountains of kasol")
    }

    else{
        res.statusCode=400
        res.setHeader('Content-type','text/plain')
        res.end("Hello from mountains of nowhere")

    }

})

console.log("hello");

server.listen(port,hostName,()=>{
    console.log(`Server is listening at http:${hostName}:${port}`);
    console.log("hi");
    
    
})