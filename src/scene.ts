import { Color, Fog, Scene as ThreeScene } from "three";

export class Scene {
  private static scene: ThreeScene;

  constructor() {}

  public static create() {
    Scene.scene = new ThreeScene();
    Scene.scene.background = new Color(0xffffff);
    Scene.scene.fog = new Fog(0xa0a0a0, 10, 50);
    return Scene.scene;
  }

  public static get() {
    return Scene.scene;
  }
}
