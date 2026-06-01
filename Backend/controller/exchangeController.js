const exchangeRateServices=require("../services/apiresults")

exports.convertCurrency=(req,res,next)=>{
    const {amount,sourceCurrency,targetCurrency}=req.body;

    if(!amount || !sourceCurrency || !targetCurrency){
        return res.status(400).json("Feilds are missing")
    }
    const targetAmount=exchangeRateServices.convert(amount,sourceCurrency,targetCurrency);
    res.json({status:"success",targetAmount});
}