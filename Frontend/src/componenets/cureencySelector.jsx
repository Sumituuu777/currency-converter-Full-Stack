import currencies from "../../util/currencies"
function CureencySelector() {
    return (
        <>
            <select name="sourceCurrency" id="sourceCurrency">
                {
                    Object.keys(currencies).map(currency => {
                        <option key={currency}
                            value={currency}>
                            {currencies[currency].flag}{currency}-{currencies[currency].name}
                        </option>
                    })
                }
            </select>
            <select name="sourceCurrency" id="sourceCurrency">
                {
                    Object.keys(currencies).map(currency => {
                        <option key={currency}
                            value={currency}>
                            {currencies[currency].flag}{currency}-{currencies[currency].name}
                        </option>
                    })
                }
            </select>
        </>
    )
}

export default CureencySelector
