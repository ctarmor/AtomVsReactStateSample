import { useContext, useEffect } from "react";
import AnimeReactContext from "./AnimeReactProviderContext";
import { useAnimeAtom } from "./useAnimeAtom";
import { appHeadingAtom, AppHeadingAtom } from "./AppHeadingAtom";
import { useAtom } from "jotai";

// eslint-disable-next-line react/prop-types
export const AnimeComponent = ({ componentId }) => {
  const { anime, setAnime } = useAnimeAtom();
  const [ appHeading, setAppHeading ] = useAtom(appHeadingAtom);
  const { ccontextState, setCcontextState } = useContext(AnimeReactContext);

  // Ugly way to initaliza an atom but it's the recommended way ? 
  useEffect(() => {
    setAnime('not set');
  }, [setAnime])

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
          setAppHeading(`Last component updated: ${componentId}`);
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
      </div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h3>Local useAtom(appHeadingAtom)</h3>
        {appHeading ?? 'empty'}
      </div>

      <div style={{ border: "1px solid black", padding: "10px" }}>
        <AppHeadingAtom />
      </div>
    </>
  );
};
