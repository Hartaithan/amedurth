import { DirectionalLight, HemisphereLight, LightProbe } from "three";
import { Scene } from "./scene";

export class Light {
  private static light: HemisphereLight;
  private static lightProbe: LightProbe;
  private static directionalLight: DirectionalLight;

  constructor() {}

  public static create() {
    const scene = Scene.get();

    const light = new HemisphereLight(0xffffff, 0x8d8d8d, 3);
    light.position.set(0, 20, 0);
    Light.light = light;
    scene.add(light);

    const lightProbe = new LightProbe();
    Light.lightProbe = lightProbe;
    scene.add(lightProbe);

    const directionalLight = new DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 10, 10);
    Light.directionalLight = directionalLight;
    scene.add(directionalLight);

    return Light.light;
  }

  public static get() {
    return Light.light;
  }

  public static getLightProbe() {
    return Light.lightProbe;
  }

  public static getDirectionalLight() {
    return Light.directionalLight;
  }
}
