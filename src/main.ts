import { Animation } from "./animation";
import { Camera } from "./camera";
import { Container } from "./container";
import { DisplayCase } from "./display-case";
import { Light } from "./light";
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
    Light.create();
    DisplayCase.create();
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
