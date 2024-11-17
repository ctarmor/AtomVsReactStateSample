import { atom, useAtom } from "jotai";
import { useContext } from "react";
import AnimeReactContext from "./AnimeReactProviderContext";

const animeAtom = atom('not set');
animeAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
animeAtom.debugLabel = ">>> debugLabel: Anime Atom";

export const AnimeComponent = ({ componentId }) => {
  const [anime, setAnime] = useAtom(animeAtom);
  const { ccontextState, setCcontextState } = useContext(AnimeReactContext);

  const animeBackground = anime === 'not set' ? '' : 'lightgreen'
  const contextBackground = ccontextState === 'not set' ? '' : 'lightblue'

  return (
    <>
      <button
        style={{ margin: '10px' }}
        onClick={() => {
          const title = `State Set by #${componentId} - ${Date.now()}`;

          setAnime(title); // Set Atom state
          setCcontextState(title); // Set react state
        }}
      >
        Set local Anime Atom and React Context state
      </button>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>React Context State</h3>
        <div style={{ background: contextBackground }} >{ccontextState}</div>
      </div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>Anime Atom State</h3>
        <div style={{ background: animeBackground }} >{anime}</div>
        <div style={{ background: 'lightpink' }} >Notice local atom state is shared cross components instance !</div>
      </div>
    </>
  );
};
