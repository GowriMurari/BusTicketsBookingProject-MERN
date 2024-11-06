var http = require('http');





http.createServer(function(req,res){
    const {url,method}=req
    res.write("url: "+url)
    res.write("\nmethod:"+method)
    if(url=="/login"){
        res.write("\nLogin Page")
    }
    else if(url=="/signin"){
        res.write("\nsignin Page")
    }
    else{
        res.write("\nHome Page")
    }
    res.end();
}).listen(543)