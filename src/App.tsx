import { Loader } from "@react-three/drei";
import { FC } from "react";
import Navigation from "./components/navigation";
import Scene from "./components/scene";
import RootProvider from "./providers/root";

const App: FC = () => (
  <RootProvider>
    <Scene />
    <Loader
      containerStyles={{ background: "#FFFFFF" }}
      dataStyles={{ color: "#000000" }}
    />
    <Navigation />
  </RootProvider>
);

export default App;
