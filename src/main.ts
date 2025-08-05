import { Animation } from "./animation";
import { Camera } from "./camera";
import { Container } from "./container";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import "./style.css";

const init = () => {
  try {
    Container.create();
    Scene.create();
    Camera.create();
    Renderer.create();
    Container.setup();
    Animation.listenOnResize();
    Animation.start();
  } catch (error) {
    Container.error();
    console.error("initialize error", error);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
