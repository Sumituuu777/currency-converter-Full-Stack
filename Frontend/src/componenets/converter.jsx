import { useRef, useState } from "react"
import CureencySelector from "./cureencySelector";


function Converter() {

  const textInput = useRef();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertHandler = () => {
    fetch("http://localhost:3051/api/convert", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        amount: textInput.current.value,
        sourceCurrency: fromCurrency,
        targetCurrency: toCurrency
      })

    })
      .then(res => res.json())
      .then(data => setConvertedAmount(data.targetAmount))
  }
  return (

    <div>
      <div>
        <input
          type="text"
          className=""
          ref={textInput}
          placeholder="Enter amount"
        />
      </div>

      <CureencySelector label="From" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} />
      <CureencySelector label="To" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} />
      <div>
        <button
          className="bg-blue-500"
          onClick={convertHandler}>
          Convert
        </button>
      </div>
      <div>{convertedAmount}</div>
    </div>
  )
}

export default Converter