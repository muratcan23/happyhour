import Moods from "./components/Moods";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col bg-[#17645F] ">
      <Navbar />
      <Moods />
    </div>
  );
}

export default App;
