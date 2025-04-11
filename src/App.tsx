import { FC } from "react";
import Navigation from "./components/navigation";
import Scene from "./components/scene";
import RootProvider from "./providers/root";

const App: FC = () => (
  <RootProvider>
    <Scene />
    <Navigation />
  </RootProvider>
);

export default App;
