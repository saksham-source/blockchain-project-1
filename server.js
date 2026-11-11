const http=require('node:http');
const marker='CANDIDATE';
if(!process.env.AUDIT_NEW_KEY) throw new Error('AUDIT_NEW_KEY required');
http.createServer((req,res)=>{
  if(req.url==='/fault' && marker==='CANDIDATE'){res.statusCode=503;return res.end('audit fault');}
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify({marker,configured:Boolean(process.env.AUDIT_NEW_KEY),instance:require('node:os').hostname()}));
}).listen(Number(process.env.PORT||3000),'0.0.0.0');
