import currencies from "../../util/currencies"
function CureencySelector({ label, value, onChange }) {
    return (
        <>
            <label htmlFor={`currency-${label}`}>{label}</label>
            <select name={`currency-${label}`} id={`currency-${label}`} value={value} onChange={onChange} >
                {
                    Object.entries(currencies).map(([code, data]) => (
                        <option key={code} value={code}>
                            {data.flag} {code} - {data.name}
                        </option>
                    ))
                }
            </select>
        </>
    )
}

export default CureencySelector
