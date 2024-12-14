import express from 'express'

import {BACKEND_URL,VALUE} from "@repo/common/config";
const app = express();
console.log(VALUE);
app.get('/',(req,res)=>{
  console.log(BACKEND_URL);
  res.json({
    message:"Hello from Backend"
  })
});


app.listen(5000,()=>{
  console.log('server is running in port 5000')
})
