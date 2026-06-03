const exchangeRateServices=require("../services/apiresults")

// exports.convertCurrency=(req,res,next)=>{
//     const {amount,sourceCurrency,targetCurrency}=req.body;
//      console.log("POST /convert hit");

//     if(!amount || !sourceCurrency || !targetCurrency){
//         return res.status(400).json("Feilds are missing")
//     }
//     const targetAmount=exchangeRateServices.convert(amount,sourceCurrency,targetCurrency);
//     res.json({status:"success",targetAmount});
// }
exports.convertCurrency=(req,res,next)=>{
    try{
        const {amount,sourceCurrency,targetCurrency}=req.body;

        console.log("POST /convert hit");
        console.log(req.body);
        console.log(exchangeRateServices.rates);

        const targetAmount=
          exchangeRateServices.convert(
            amount,
            sourceCurrency,
            targetCurrency
          );

        res.json({status:"success",targetAmount});
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error: err.message
        });
    }
}