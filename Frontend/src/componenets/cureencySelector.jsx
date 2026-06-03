import Select from "react-select";
import currencies from "../../util/currencies";

function CurrencySelector({ label, value, onChange }) {
  const options = Object.entries(currencies).map(([code, data]) => ({
    value: code,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={data.flag}
          alt={code}
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span>
          {code} - {data.name}
        </span>
      </div>
    ),
    searchLabel: `${code} ${data.name}`,
  }));

  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <Select
        value={selectedOption}
        options={options}
        onChange={(selected) =>
          onChange({ target: { value: selected.value } })
        }
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        isSearchable
      />
    </div>
  );
}

export default CurrencySelector;
