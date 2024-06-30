import { SearchNormal1 } from "iconsax-react";
import PageHeader from "../components/PageHeader";
import { getMovies } from "../hooks";
import ItemCard from "../components/ItemCard";

function Movies() {
  const { data } = getMovies();

  return (
    <div className="w-full">
      <PageHeader title="Popular Movies" />

      <div className="w-full h-full px-7 lg:px-20 py-5">
        <div className="w-full flex justify-between items-center">
          <div className="border border-[#b6b6b6] h-[45px] pl-5 flex w-[433px]">
            <input
              type="text"
              className="border-none outline-none w-full h-full text-xs text-[#b4b4b4]"
              placeholder="Search"
            />

            <button
              type="button"
              className="w-10 h-full bg-[#017efe] p-3 flex justify-center items-center"
            >
              <SearchNormal1 size="20" color="#ffff" />
            </button>
          </div>

          <div className="border border-[#b6b6b6] w-[286px] h-[37px] p-5 flex items-center justify-between relative">
            <p className="text-xs text-[#b4b4b4] whitespace-nowrap">Sort By</p>
            <button type="button" className="border-none outline-none">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5H7z" fill="#017efe" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 lg:grid-cols-7 gap-7 my-10">
          {data &&
            data.map((el) => (
              <ItemCard title={el.title} image={el.images["Poster Art"].url} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
