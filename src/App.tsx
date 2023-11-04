import Consequence from "./components/Consequence";
import Info from "./components/Info";
import Moods from "./components/Moods";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Info />
      <Moods />
      <Consequence />
    </div>
  );
}

export default App;
