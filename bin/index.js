const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../storage/swagger.json");

const port =  3000;


const routesUser = require("./routes/UserRoutes");


app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use(cors);
app.use(bodyparser.json());


app.use('/api/v1/', routesUser);

app.listen(port, ()=>{
console.log('This is my port ' + port)
})