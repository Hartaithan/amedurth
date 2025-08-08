import { Animation } from "./animation";
import { Camera } from "./camera";
import { Container } from "./container";
import { Controls } from "./controls";
import { DisplayCase } from "./display-case";
import { Ground } from "./ground";
import { Light } from "./light";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import "./style.css";

const init = () => {
  try {
    Container.create();
    Scene.create();
    Ground.create();
    Camera.create();
    Renderer.create();
    Controls.create();
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
