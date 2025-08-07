import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Camera } from "./camera";
import { Renderer } from "./renderer";

const PI90 = Math.PI / 2;

export class Controls {
  private static controls: OrbitControls;

  constructor() {}

  public static create() {
    const camera = Camera.get();
    const renderer = Renderer.get();
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.maxPolarAngle = PI90 - 0.05;
    controls.update();
    Controls.controls = controls;
    return Controls.controls;
  }

  public static get() {
    return Controls.controls;
  }
}
