//core modules
const express=require('express');
const bodyparser=require('body-parser');
const cors=require("cors")
require('dotenv').config();

//local modules
const exchangeRouter=require("./routers/exchangeRouter")
const errorController=require("./controller/errorController")
const exchangeRateServices=require("./services/apiresults")

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use("/api",exchangeRouter)
app.use(errorController.get404)

const PORT=process.env.PORT || 3051;
async function init() {
    await exchangeRateServices.getRates();

    app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
    })
    
}
init();
