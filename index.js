const express = require("express")
const routerData = require('./routes/index')
const cors = require('cors');
const app = express();
app.use(cors());


app.get("/", (req,res)=>{
    res.send("Hello Node")
})
app.use('/api',routerData)



app.listen(process.env.PORT || 8080, () => {
    console.log("Application is running");
})