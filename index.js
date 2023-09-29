const express = require("express")
const cors = require("cors")
const app = express()

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const port =  3000


const options = {
    definition: {
        openapi: "3.0.0", 
        info: {
            title: "ArteSana API",
            version: "1.0.0",
            description: "a ArteSana API Library"
        }, 
        servers:[{
            url: "https://localhost:3000"
        }]
        
    },
    apis:["./routes/*.js"]
}

const specs = swaggerJsDoc(options);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs));



app.use(cors)
app.use(express.json())







app.listen(port, ()=>{
console.log('This is my port ' + port)
})