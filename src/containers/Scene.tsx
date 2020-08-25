import React, { useEffect } from "react";
import FZL from "../components/FZL";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

function Scene() {
  const { camera } = useThree();

  function updateCamera() {
    let y =
      (document.documentElement.scrollTop / window.innerHeight) * -12 + 1.5;
    camera.position.x = 7;
    camera.position.y = y;
    camera.position.z = 10;
    camera.lookAt(0, 0, 0);
  }

  window.addEventListener("scroll", updateCamera);

  useEffect(() => {
    updateCamera();
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        intensity={0.5}
        position={[5, 5, 10]}
        lookAt={() => new THREE.Vector3(0, 0, 0)}
      />
      <spotLight
        intensity={0.5}
        position={[5, -5, 10]}
        lookAt={() => new THREE.Vector3(0, 0, 0)}
      />
      <React.Suspense fallback={<mesh />}>
        <FZL />
      </React.Suspense>
    </>
  );
}

export default Scene;
