import {
  Mesh,
  MeshPhongMaterial,
  PlaneGeometry,
  type MeshPhongMaterialParameters,
} from "three";
import { Scene } from "./scene";

const options: MeshPhongMaterialParameters = {
  color: 0xcbcbcb,
  depthWrite: false,
};

export class Ground {
  private static ground: Mesh;

  constructor() {}

  public static create() {
    const plane = new PlaneGeometry(100, 100);
    const material = new MeshPhongMaterial(options);

    const mesh = new Mesh(plane, material);
    mesh.rotation.x = -Math.PI / 2;

    const scene = Scene.get();
    scene.add(mesh);

    Ground.ground = mesh;
    return Ground.ground;
  }

  public static get() {
    return Ground.ground;
  }
}
