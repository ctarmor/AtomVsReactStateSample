import { atom, useAtom } from "jotai";

export const appHeadingAtom = atom('AppHeadingAtom state');
appHeadingAtom.onMount = () => {
  console.log(`>>> ${Date.now()}: anximeAtom mounted.`);
  return () => {
    console.log(`>>> ${Date.now()}: anximeAtom UN-mounted.`);
  };
};
appHeadingAtom.debugLabel = ">>> debugLabel: Anime Atom";

export const AppHeadingAtom = () => {
  const [appHeader] = useAtom(appHeadingAtom);

  return (
    <div>
      <h3>appHeadingAtom Component</h3>
      <b>{appHeader}</b>
    </div>
  );
};
