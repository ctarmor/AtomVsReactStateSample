import "react";
import { atom, useAtom } from "jotai";

const animeAtom = atom();
animeAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
animeAtom.debugLabel = ">>> debugLabel: Anime Atom";

export const useAnimeAtom = (initialValue) => {
  const [anime, setAnime] = useAtom(animeAtom);

  // Activating this'll make the hook stop working ??
  
  // if (initialValue) {
  //   setAnime(initialValue);
  // }

  console.log('>>> useAnimeAtom', anime);
  
  return {
    anime,
    setAnime
  };
}
