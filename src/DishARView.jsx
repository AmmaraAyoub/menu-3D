import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function DishARView({ dish, onBack }) {
  const videoRef = useRef(null);
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    let stream;
    let renderer, scene, camera, model;
    let animationFrameId;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      } catch (err) {
        console.error("Erreur caméra :", err);
      }
    }

    function initThree() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      canvasContainerRef.current.innerHTML = "";
      canvasContainerRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 1, 4);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(2, 4, 5);
      scene.add(light);

      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);

      const loader = new GLTFLoader();
      loader.load(
        "/models/Pasta.glb", // 🔥 ADAPTÉ À TON FICHIER
        (gltf) => {
          model = gltf.scene;

          model.scale.set(1, 1, 1);
          model.position.set(0, -0.8, 0);

          scene.add(model);
        },
        undefined,
        (error) => console.error("Erreur GLB :", error)
      );

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (model) model.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
      animate();
    }

    startCamera();
    initThree();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        ref={canvasContainerRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      <button
        onClick={onBack}
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          padding: "8px 14px",
          borderRadius: "999px",
          border: "none",
          background: "rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        ← Menu
      </button>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "12px 16px",
          background: "rgba(200,0,0,0.7)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>{dish.name}</div>
        <div style={{ fontSize: 14 }}>{dish.description}</div>
        <div style={{ fontSize: 16, fontWeight: 700, textAlign: "right" }}>
          {dish.price}
        </div>
      </div>
    </div>
  );
}
