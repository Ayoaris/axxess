import PageHeader from "../components/PageHeader";
import { getMovies } from "../hooks";
import ItemCard from "../components/ItemCard";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SelectInput from "../components/SelectInput";
import { DataType } from "../hooks/types";

function Movies() {
  const { data, isLoading, isError, isSuccess } = getMovies();
  const [searchInput, setSearchInput] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(e.target.value);
  };

  const filteredData =
    data &&
    data
      .filter((el) =>
        el.title
          .toLowerCase()
          .includes(searchInput.length > 3 ? searchInput.toLowerCase() : "")
      )
      .sort((a, b) => {
        if (filterOption === "Year-Asc") {
          return a.releaseYear - b.releaseYear;
        } else if (filterOption === "Year-Dsc") {
          return b.releaseYear - a.releaseYear;
        } else if (filterOption === "Title-Asc") {
          return a.title.localeCompare(b.title);
        } else if (filterOption === "Title-Dsc") {
          return b.title.localeCompare(a.title);
        }
      });

  return (
    <div className="w-full">
      <PageHeader title="Popular Movies" />

      <div className="w-full h-full px-7 lg:px-20 py-5">
        <div className="w-full flex justify-between items-center">
          <SearchInput
            searchInput={searchInput}
            handleChange={handleSearchInputChange}
          />

          <SelectInput
            filterOption={filterOption}
            handleChange={handleFilterChange}
          />
        </div>

        {isLoading === true && (
          <div className="text-[#414141] text-sm mt-6 h-[393px]">
            Loading...
          </div>
        )}
        {isError === true && (
          <div className="text-[#414141] text-sm mt-6 h-[393px]">
            Oops, something went wrong...
          </div>
        )}

        {isSuccess === true && (
          <div className="w-full grid grid-cols-3 lg:grid-cols-7 gap-7 my-10">
            {filteredData &&
              filteredData.map((el) => (
                <ItemCard
                  title={el.title}
                  image={el.images["Poster Art"].url}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
