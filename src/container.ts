import { Renderer } from "./renderer";

const id = "main";

export class Container {
  private static container: HTMLElement;

  constructor() {}

  public static create() {
    if (Container.container) return Container.container;
    let container = document.getElementById(id);
    if (!container) container = document.createElement("div");
    container.id = id;
    document.body.appendChild(container);
    Container.container = container;
  }

  public static get() {
    return Container.container;
  }

  public static setup() {
    const container = Container.get();
    const renderer = Renderer.get();
    if (!renderer) throw new Error("renderer not found");
    container.appendChild(renderer.domElement);
  }

  public static error() {
    const container = Container.get();
    container.innerHTML = "<p>Something went wrong :(</p>";
  }
}
