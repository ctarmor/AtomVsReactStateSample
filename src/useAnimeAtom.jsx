import "react";
import { atom, useAtom } from "jotai";

export const animeAtom = atom();
animeAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
animeAtom.debugLabel = ">>> debugLabel: Anime Atom";

export const useAnimeAtom = (initialValue) => {
  const [anime, setAnime] = useAtom(animeAtom);

  if (initialValue) {
    setAnime(initialValue);
  }

  console.log('>>> useAnimeAtom', anime);
  
  return useAtom(animeAtom);
}
