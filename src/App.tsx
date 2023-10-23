function App() {
  return (
    <div className="flex flex-col ">
      <div className="h-16 bg-yellow-500 justify-center flex flex-row space-x-4 ">
        <img
          className="h-16 border-2 border-rose-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEm8flseo1071OcB7saryOmfdjNBlPkIUPFQ&usqp=CAU"
          alt=""
        />
        <header className="text-center text-3xl font-bold underline text-purple-700 ">
          Happy Hour
        </header>
      </div>
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  );
}

export default App;
