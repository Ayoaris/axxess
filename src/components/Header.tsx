import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function Header() {
  const [buttonDisplay, setButtonDisplay] = useState(false);
  const [harmburgerDisplay, setHarmburgerDisplay] = useState(false);
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setButtonDisplay(true);
      setHarmburgerDisplay(false);
    } else {
      setButtonDisplay(false);
      setHarmburgerDisplay(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDisplayPopUp = useCallback(
    () => setDisplayPopUp(!displayPopUp),
    [displayPopUp]
  );
  return (
    <div className="px-7 lg:px-20 py-3 bg-[#017efe] shadow-[0px_3px_10px_0px_rgba(0,0,0,0.66)] relative">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h3 className="text-[#fdfdfd] font-semibold text-2xl lg:text-3xl leading-[38.74px] whitespace-nowrap">
            DEMO Streaming
          </h3>
        </Link>

        {buttonDisplay === true && (
          <div className="flex items-center gap-8">
            <button
              type="button"
              className="border-none outline-none text-sm text-[#fdfdfd] font-semibold leading-[16.44px]"
            >
              Log in
            </button>

            <button
              type="button"
              className="bg-[#424242] px-4 py-3 text-sm text-[#fdfdfd] font-semibold leading-[16.44px]"
            >
              Start your free trial
            </button>
          </div>
        )}

        {harmburgerDisplay === true && (
          <button
            type="button"
            className="border-none outline-none"
            onClick={toggleDisplayPopUp}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" fill="#fdfdfd" />
              <rect y="11" width="24" height="2" fill="#fdfdfd" />
              <rect y="18" width="24" height="2" fill="#fdfdfd" />
            </svg>
          </button>
        )}

        {displayPopUp === true && (
          <div className="absolute right-0 top-[65px] w-3/5 bg-[#fdfdfd] shadow-md rounded-sm p-3">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="text-sm text-[#424242] px-4 py-3 border border-[#424242] font-semibold leading-[16.44px]"
              >
                Log in
              </button>

              <button
                type="button"
                className="bg-[#424242] px-4 py-3 text-sm text-[#fdfdfd] font-semibold leading-[16.44px]"
              >
                Start your free trial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
