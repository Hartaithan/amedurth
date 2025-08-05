import { WebGLRenderer } from "three";

export class Renderer {
  private static renderer: WebGLRenderer;

  constructor() {}

  public static create() {
    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    Renderer.renderer = renderer;
    return Renderer.renderer;
  }

  public static get() {
    return Renderer.renderer;
  }
}
