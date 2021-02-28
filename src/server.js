import express from 'express';
import http from 'http';
import fs from "fs";

const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    msssage: 'successful',
    data: {
      val: 1234,
      name: 'John'
    }
  });
});

if (!module.parent) {
  // listen on port config.port
  app.listen(PORT, () => {
    console.log(`server started on  port http://127.0.0.1:${PORT}`);
  });
}


export default app;