type SelectInputProps = {
  filterOption: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({ filterOption, handleChange }: SelectInputProps) {
  return (
    <div className="border border-[#b6b6b6] w-[286px] h-[37px]">
      <select
        className="border-none outline-none w-full h-full text-[#b4b4b4] text-xs"
        aria-placeholder="Sort By"
        value={filterOption}
        onChange={handleChange}
      >
        <option value="" className="">
          Sort By
        </option>
        <option value="Year-Asc" className="">
          Year in Ascending Order
        </option>
        <option value="Year-Dsc" className="">
          Year in Descending Order
        </option>
        <option value="Title-Asc" className="">
          Title in Ascending Order
        </option>
        <option value="Title-Dsc" className="">
          Title in Descending Order
        </option>
      </select>
    </div>
  );
}

export default SelectInput;
