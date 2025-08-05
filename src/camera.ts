import { PerspectiveCamera } from "three";

export class Camera {
  private static camera: PerspectiveCamera;

  constructor() {}

  public static create() {
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new PerspectiveCamera(50, aspect, 1, 10);
    camera.position.z = 6;
    Camera.camera = camera;
    return Camera.camera;
  }

  public static get() {
    return Camera.camera;
  }
}
