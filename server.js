const http=require('node:http');
const marker='BASELINE';
http.createServer((req,res)=>{
  if(req.url==='/fault' && marker==='CANDIDATE'){res.statusCode=503;return res.end('audit fault');}
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify({marker,configured:Boolean(process.env.AUDIT_REQUIRED_KEY),instance:require('node:os').hostname()}));
}).listen(Number(process.env.PORT||3000),'0.0.0.0');
