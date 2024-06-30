import "../css/style.css";

type LinkCardProps = {
  title: string;
  description: string;
  handleClick: () => void;
};

function LinkCard({ title, description, handleClick }: LinkCardProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-none outline-none"
    >
      <div className="bg-[#1e1e1e] px-8 py-14">
        <div className="w-[68px] linkcard_image h-[77px] relative flex justify-center items-center">
          <h6 className="text-[#fdfdfd] text-2xl font-semibold">{title}</h6>
        </div>
      </div>
      <p className="mt-2 text-xs text-[#1e1e1e]">{description}</p>
    </button>
  );
}

export default LinkCard;
