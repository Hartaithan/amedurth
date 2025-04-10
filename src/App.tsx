import { FC } from "react";
import Scene from "./components/scene";
import RootProvider from "./providers/root";

const App: FC = () => (
  <RootProvider>
    <Scene />
  </RootProvider>
);

export default App;
