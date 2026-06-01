const axios = require('axios');

require('dotenv').config();

class ExchangeRates{
    constructor(){
        this.apiKey=process.env.API_KEY,
        this.baseurl="https://v6.exchangerate-api.com/v6/",
        this.rates=null
    }

    async getRates(){
        const url=`${this.baseurl}${this.apiKey}/latest/INR`;
        console.log(url);
        const response=await axios.get(url);
         
        if(response.status==200 || response.data.result==="success"){
            this.rates=response.data.conversion_rates;   
        }
    }
    convert(amount,sourceCurrency,targetCurrency){
        const sourceRate=this.rates[sourceCurrency];
        const targetRate=this.rates[targetCurrency];
        
        return amount*(targetRate/sourceRate);
    }
}
module.exports= new ExchangeRates();