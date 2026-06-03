const exchangeRateServices=require("../services/apiresults")

exports.convertCurrency=(req,res,next)=>{
    try{
        const {amount,sourceCurrency,targetCurrency}=req.body;

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