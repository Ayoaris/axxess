function Header() {
  return (
    <div className="px-20 py-3 bg-[#017efe]">
      <div className="flex justify-between items-center">
        <h3 className="text-[#fdfdfd] font-semibold text-3xl leading-[38.74px]">
          DEMO Streaming
        </h3>

        <div className="flex items-center gap-8">
          <button
            type="button"
            className="border-none outline-none text-sm text-[#fdfdfd] font-semibold leading-[16.44px]"
          >
            Log in
          </button>

          <button
            type="button"
            className="bg-[#424242] px-4 py-3 text-sm text-[#fdfdfd] font-semibold leading-[16.44px] bg-[]"
          >
            Start your free trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
