const express = require('express');
const http = require('http');

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const cors = require('cors')
const app = express();
const server = http.createServer(app);

const port = 5000;
const serialPort = new SerialPort({ path: "COM4", baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

app.use(express.json());
app.use(cors({origin: "*",credentials: true}))
serialPort.on("open", () => {
  console.log("Serial port open");
});
let mesg =""
parser.on("data", (data) => {
  mesg = data;
    
});


app.get("/",(req,res)=>{
  res.json({data:mesg});
})
  

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

  
});


