import { useEffect, useRef } from "react";
import styles from "@/styles/Three.module.sass";
import * as THREE from "three";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;

    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas!,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set the camera position
    camera.position.setZ(30);

    // Create a torus and add it to the scene
    // const geometry = new THREE.TorusKnotGeometry(10, 3, 16, 100);
    // const material = new THREE.MeshStandardMaterial({
    //   color: 0x555599,
    // });
    // const torusKnot = new THREE.Mesh(geometry, material);
    // scene.add(torusKnot);

    // Set Lighting
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    //Add Star

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshToonMaterial({ color: 0xd8cf61 });
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3)
        .fill(1)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill(1).forEach(addStar);

    // Define an animation loop using requestAnimationFrame
    function animate() {
      requestAnimationFrame(animate);
      // torusKnot.rotation.x += 0.01;
      // torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      // torusKnot.rotation.x += 0.05;
      // torusKnot.rotation.y += 0.01;
      // torusKnot.position.y += 0.003;

      camera.position.z -= 0.015;
      camera.position.x -= 0.0002;
      camera.position.y -= 0.0002;
    }

    document.body.onscroll = moveCamera;

    // Clean up by removing the event listener and disposing of the renderer
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.canvas}>
      <canvas ref={canvasRef} id="bg" />
    </div>
  );
}
