export default function Button({ label, iconurl }) {
  return (
    <button className="font-montserrat mt-4 border-none border-coral-red rounded-full bg-coral-red flex justify-center items-center gap-4 text-lg leading-normal px-2 py-4 w-40 h-10 text-white">
      {label}
      {iconurl && <img src={iconurl} alt="left arrow" />}
    </button>
  );
}
