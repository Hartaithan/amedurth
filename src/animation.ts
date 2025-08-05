import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { Scene } from "./scene";

export class Animation {
  constructor() {}

  private static handleResize() {
    const camera = Camera.get();
    const renderer = Renderer.get();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private static handleResizeEvent() {
    Animation.handleResize();
  }

  public static listenOnResize() {
    window.addEventListener("resize", Animation.handleResizeEvent);
    Animation.handleResizeEvent();
  }

  public static start() {
    const renderer = Renderer.get();
    const scene = Scene.get();
    const camera = Camera.get();

    requestAnimationFrame(Animation.start);

    renderer.render(scene, camera);
  }
}
