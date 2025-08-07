import { HemisphereLight } from "three";
import { Scene } from "./scene";

export class Light {
  private static light: HemisphereLight;

  constructor() {}

  public static create() {
    const light = new HemisphereLight(0xffffff, 0x8d8d8d, 3);
    light.position.set(0, 20, 0);
    Light.light = light;
    const scene = Scene.get();
    scene.add(light);
    return Light.light;
  }

  public static get() {
    return Light.light;
  }
}
