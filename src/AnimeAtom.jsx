import { atom } from "jotai";

export const animeAtom = atom('not set');
animeAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
animeAtom.debugLabel = ">>> debugLabel: Anime Atom";
