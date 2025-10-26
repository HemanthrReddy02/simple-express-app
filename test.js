const http = require('http');
http.get({ hostname:'localhost', port:3000, path: '/health' }, res=>{
  console.log('statusCode:', res.statusCode);
  process.exit(0);
}).on('error', e=> { console.error('Error connecting'); process.exit(1); });
