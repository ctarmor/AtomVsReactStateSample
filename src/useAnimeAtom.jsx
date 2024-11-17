import "react";
import { atom, useAtom, useAtomValue } from "jotai";

const animeAtom = atom();
animeAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
animeAtom.debugLabel = ">>> debugLabel: Anime Atom";

export const useAnimeAtom = (initialValue) => {
  const [, setAnime] = useAtom(animeAtom);

  if (initialValue) {
    setAnime(initialValue);
  }

  return useAtom(animeAtom);
}

export const useAnimeAtomValue = (initialValue) => {
  const [anime, setAnime] = useAtomValue(animeAtom);

  if (initialValue) {
    setAnime(initialValue);
  }

  return {
      anime, 
      setAnime,
  };
}
