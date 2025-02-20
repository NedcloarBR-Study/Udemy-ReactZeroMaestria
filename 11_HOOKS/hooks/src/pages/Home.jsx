import HookCustom from "../components/HookCustom";
import HookUseCallback from "../components/HookUseCallback";
import { SomeContext } from "../components/HookUseContext";
import HookUseEffect from "../components/HookUseEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseMemo from "../components/HookUseMemo";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";
import HookUseState from "../components/HookUseState";

import { useContext } from "react"

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
