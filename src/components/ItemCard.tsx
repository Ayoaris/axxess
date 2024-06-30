type ItemCardProps = {
  title: string;
  image: string;
};

function ItemCard({ title, image }: ItemCardProps) {
  //   console.log({ imageUrl: image?.PosterArt?.url });
  return (
    <div className="w-full">
      <img
        src={image}
        className="w-full h-[201px]"
        alt="image photo"
        loading="lazy"
      />
      <p className="text-xs mt-2 text-[#1e1e1e]">{title}</p>
    </div>
  );
}

export default ItemCard;
