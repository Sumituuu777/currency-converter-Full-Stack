import { useRef, useState } from "react";
import CureencySelector from "./cureencySelector";

function Converter() {
  const textInput = useRef();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);


  const convertHandler = () => {

    setLoading(true);
    fetch("https://currency-converter-full-stack.onrender.com/api/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: textInput.current.value,
        sourceCurrency: fromCurrency,
        targetCurrency: toCurrency,
      }),
    })
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.targetAmount))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Currency Converter
        </h1>

        <input
          type="number"
          ref={textInput}
          placeholder="Enter amount"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        />

        <div className="space-y-4">
          <CureencySelector
            label="From"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          />

          <CureencySelector
            label="To"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>

        <button
          onClick={convertHandler}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Converted Amount</p>
          <h2 className="text-3xl font-bold text-green-600 break-words">
            {convertedAmount}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Converter;