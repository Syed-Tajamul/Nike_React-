export default function ShoeCard({ shoe, image, setImage }) {
  console.log(shoe.bigShoe);
  console.log(image);
  function handleClick() {
    setImage(shoe.bigShoe);
  }
  return (
    <div
      onClick={handleClick}
      className={`${
        image === shoe.bigShoe
          ? "border-2 border-coral-red"
          : "border-transparent"
      } cursor-pointer bg-card bg-center px-4 py-4 rounded-lg`}
    >
      <img src={shoe.thumbnail} alt="shoeimage" width={123} height={103} />
    </div>
  );
}
