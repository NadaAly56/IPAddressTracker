import "./App.css";
import DataPreview from "./components/DataPreview";
import Map from "./components/Map";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="bg-img">
        <div className="w-75 m-auto">
          <Search />
          <DataPreview />
        </div>
      </div>
      <Map />
    </>
  );
}

export default App;
