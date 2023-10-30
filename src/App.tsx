import Info from "./components/Info";
import Moods from "./components/Moods";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <Info />
      <Moods />
      <div>03</div>
    </div>
  );
}

export default App;
