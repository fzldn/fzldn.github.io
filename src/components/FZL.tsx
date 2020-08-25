import React from "react";
import { useLoader } from "react-three-fiber";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
import colladaFile from "../assets/model/FZL.dae";

function FZL() {
  const { scene } = useLoader(ColladaLoader, colladaFile);

  return <primitive object={scene} />;
}

export default FZL;
