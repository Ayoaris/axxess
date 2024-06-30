import { useState } from "react";

type ItemCardProps = {
  title: string;
  image: string;
};

function ItemCard({ title, image }: ItemCardProps) {
  const [imageSrc, setImageSrc] = useState(image);

  const handleError = () => {
    setImageSrc(
      "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg"
    );
  };
  return (
    <div className="w-full">
      <img
        src={imageSrc}
        className="w-full h-[201px]"
        onError={handleError}
        alt="image photo"
        loading="lazy"
      />
      <p className="text-xs mt-2 text-[#1e1e1e]">{title}</p>
    </div>
  );
}

export default ItemCard;
