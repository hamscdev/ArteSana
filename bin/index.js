const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express();
const connection = require('../bin/server/config/database_config');
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../bin/server/config/swagger.json");
const port =  3000;
const routesUser = require("./routes/UserRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/api/v1/', routesUser);


connection.sync({
    logging: console.log,
    force: true
}).then(() => {
    console.log("Connection stablished succefully.");
}).catch(error => {
    console.log("Connection unabled " + error);
})

app.listen(process.env.EXTERNAL_PORT || 3000);