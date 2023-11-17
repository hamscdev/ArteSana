const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../storage/swagger.json");
const port =  3000;
const routesUser = require("./routes/UserRoutes");

const sequelize = require("../config/conection_bd")



app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use(bodyparser.json());
app.use('/api/v1/', routesUser);



try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
app.listen(port, ()=>{
console.log('This is my port ' + port)
})