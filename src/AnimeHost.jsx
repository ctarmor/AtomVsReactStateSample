import { useState } from "react";
import { AnimeComponent } from "./AnimeComponent";
import AnimeReactProvider from "./AnimeReactProvider";
import { AnimeAtomProvider } from "./AnimeAtom";

export const AnimeHost = () => {
  const [animeCount, setAnimeCount] = useState([1]);

  return (
    <>
      <table>
        {animeCount.map((item, k) => {
          const componentId = k + 1;
          return (
            <th key={k}>
              <div style={{ border: "2px solid black", padding: "30px" }}>
                <h2>Anime Component {componentId}</h2>
                <AnimeAtomProvider>
                  <AnimeReactProvider>
                    <div style={{ border: "2px solid gray", padding: "10px" }}>
                      <AnimeComponent componentId={componentId} />
                    </div>
                  </AnimeReactProvider>
                </AnimeAtomProvider>
              </div>
            </th>
          );
        })}
        <th style={{ alignContent: "center" }}>
          <div>
            <button
              style={{ height: '350px' }}
              onClick={() => {
                setAnimeCount([...animeCount, animeCount.length]);
              }}
            >
              Add Anime Component &gt; &gt;
            </button>
          </div>
        </th>
      </table>
    </>
  );
};
