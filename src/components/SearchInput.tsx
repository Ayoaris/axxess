import { SearchNormal1 } from "iconsax-react";

type SearchInputProps = {
  searchInput: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function SearchInput({ searchInput, handleChange }: SearchInputProps) {
  return (
    <div className="border border-[#b6b6b6] h-[45px] pl-5 flex w-full lg:w-[433px] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.18)]">
      <input
        type="text"
        className="border-none outline-none w-full h-full text-xs text-[#b4b4b4]"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search"
      />

      <div className="w-10 h-full bg-[#017efe] p-3 flex justify-center items-center">
        <SearchNormal1 size="20" color="#ffff" />
      </div>
    </div>
  );
}

export default SearchInput;
