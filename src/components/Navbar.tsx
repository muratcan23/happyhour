const Navbar = () => {
  return (
    <div className="h-18 bg-yellow-500 justify-center flex flex-row space-x-3 only:">
      <img
        className="h-16 border-2 border-rose-500"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEm8flseo1071OcB7saryOmfdjNBlPkIUPFQ&usqp=CAU"
        alt=""
      />
      <header className="text-center text-3xl font-bold underline text-purple-700 ">
        Happy Hour
      </header>
    </div>
  );
};

export default Navbar;
