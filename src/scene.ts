import { Scene as ThreeScene } from "three";

export class Scene {
  private static scene: ThreeScene;

  constructor() {}

  public static create() {
    Scene.scene = new ThreeScene();
    return Scene.scene;
  }

  public static get() {
    return Scene.scene;
  }
}
