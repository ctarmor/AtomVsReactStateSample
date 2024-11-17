import { useState } from "react";
import "./App.css";
import { AnimeHost } from "./AnimeHost";

function App() {
  const [showAnime, setShowAnime] = useState(false);

  return (
    <div style={{ width: '1600px', alignContent: "top" }}>
      <button
        style={{ width: "600px", alignContent: "top" }}
        onClick={() => {
          setShowAnime(!showAnime);
        }}
      >
        Show / Hide Anime Host
      </button>

      <div>
        {showAnime ? (
          <>
            <hr />
            <AnimeHost />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
