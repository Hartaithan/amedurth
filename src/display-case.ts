import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  type MeshStandardMaterialParameters,
} from "three";
import { sizes } from "./constants/sizes";
import { Scene } from "./scene";

const materialOptions: MeshStandardMaterialParameters = {
  color: "#8d8d8d",
  metalness: 0.1,
  roughness: 0.2,
};

export class DisplayCase {
  private static display: Mesh;

  constructor() {}

  public static create() {
    const geometry = new BoxGeometry(...sizes.display);
    const material = new MeshStandardMaterial(materialOptions);
    const display = new Mesh(geometry, material);

    const scene = Scene.get();
    scene.add(display);

    return DisplayCase.display;
  }

  public static get() {
    return DisplayCase.display;
  }
}
