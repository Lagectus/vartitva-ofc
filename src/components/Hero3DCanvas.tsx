"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let handleMouseMove: ((event: MouseEvent) => void) | undefined;
    let handleResize: (() => void) | undefined;
    let isIntersecting = true;
    let observer: IntersectionObserver | undefined;

    // Dynamically import Three.js in browser context only
    import("three").then((THREE) => {
      if (!mountRef.current) return;

      const width = container.clientWidth || 500;
      const height = container.clientHeight || 500;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 14;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      const helixGroup = new THREE.Group();
      mainGroup.add(helixGroup);

      const titaniumMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xd97706,
        emissive: 0x78350f,
        roughness: 0.2,
        metalness: 0.85,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        reflectivity: 0.9,
      });

      const rubyRedMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xf59e0b,
        emissive: 0xb45309,
        roughness: 0.15,
        metalness: 0.8,
        clearcoat: 1.0,
      });

      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xfffbeb,
        transmission: 0.9,
        opacity: 1,
        transparent: true,
        roughness: 0.1,
        ior: 1.5,
      });

      const nodeCount = 18;
      const radius = 1.8;
      const heightSpan = 7;
      const geometriesToDispose: Array<{ dispose: () => void }> = [];

      for (let i = 0; i < nodeCount; i++) {
        const t = i / nodeCount;
        const angle = t * Math.PI * 3;
        const y = (t - 0.5) * heightSpan;

        const xA = Math.cos(angle) * radius;
        const zA = Math.sin(angle) * radius;
        const sphereGeoA = new THREE.SphereGeometry(0.28, 24, 24);
        geometriesToDispose.push(sphereGeoA);
        const meshA = new THREE.Mesh(sphereGeoA, titaniumMaterial);
        meshA.position.set(xA, y, zA);
        helixGroup.add(meshA);

        const xB = Math.cos(angle + Math.PI) * radius;
        const zB = Math.sin(angle + Math.PI) * radius;
        const sphereGeoB = new THREE.SphereGeometry(0.28, 24, 24);
        geometriesToDispose.push(sphereGeoB);
        const meshB = new THREE.Mesh(sphereGeoB, rubyRedMaterial);
        meshB.position.set(xB, y, zB);
        helixGroup.add(meshB);

        if (i % 2 === 0) {
          const barCurve = new THREE.LineCurve3(
            new THREE.Vector3(xA, y, zA),
            new THREE.Vector3(xB, y, zB)
          );
          const barGeo = new THREE.TubeGeometry(barCurve, 8, 0.08, 12, false);
          geometriesToDispose.push(barGeo);
          const barMesh = new THREE.Mesh(barGeo, titaniumMaterial);
          helixGroup.add(barMesh);

          const ringGeo = new THREE.TorusGeometry(radius * 1.15, 0.04, 12, 48);
          geometriesToDispose.push(ringGeo);
          const ringMesh = new THREE.Mesh(ringGeo, glassMaterial);
          ringMesh.position.set(0, y, 0);
          ringMesh.rotation.x = Math.PI / 2;
          helixGroup.add(ringMesh);
        }
      }

      const coreRingGeo = new THREE.TorusGeometry(3.2, 0.12, 24, 64);
      geometriesToDispose.push(coreRingGeo);
      const coreRing = new THREE.Mesh(coreRingGeo, rubyRedMaterial);
      coreRing.rotation.x = Math.PI / 3;
      mainGroup.add(coreRing);

      const outerRingGeo = new THREE.TorusGeometry(4.2, 0.06, 24, 64);
      geometriesToDispose.push(outerRingGeo);
      const outerRing = new THREE.Mesh(outerRingGeo, glassMaterial);
      outerRing.rotation.y = Math.PI / 4;
      mainGroup.add(outerRing);

      const particleCount = 140;
      const particleGeo = new THREE.BufferGeometry();
      geometriesToDispose.push(particleGeo);
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 16;
        particlePositions[i + 1] = (Math.random() - 0.5) * 16;
        particlePositions[i + 2] = (Math.random() - 0.5) * 16;
      }

      particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

      const particleMat = new THREE.PointsMaterial({
        color: 0xf59e0b,
        size: 0.15,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xd97706, 3.0);
      mainLight.position.set(10, 15, 10);
      scene.add(mainLight);

      const redLight = new THREE.PointLight(0xf59e0b, 4.5, 30);
      redLight.position.set(-10, -5, 5);
      scene.add(redLight);

      const mouseLight = new THREE.PointLight(0xfde047, 5, 25);
      mouseLight.position.set(0, 0, 8);
      scene.add(mouseLight);

      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      handleMouseMove = (event: MouseEvent) => {
        if (!container || !isIntersecting) return;
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        mouseX = (x / rect.width - 0.5) * 2;
        mouseY = -(y / rect.height - 0.5) * 2;
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      let clock = new THREE.Clock();

      const animate = () => {
        if (isIntersecting) {
          const elapsedTime = clock.getElapsedTime();

          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          helixGroup.rotation.y = elapsedTime * 0.35;
          coreRing.rotation.z = elapsedTime * 0.2;
          outerRing.rotation.x = elapsedTime * -0.15;
          particles.rotation.y = elapsedTime * 0.05;

          mainGroup.rotation.y = targetX * 0.4;
          mainGroup.rotation.x = -targetY * 0.3;

          mouseLight.position.x = targetX * 8;
          mouseLight.position.y = targetY * 8;

          renderer.render(scene, camera);
        }
        animationFrameId = requestAnimationFrame(animate);
      };

      // Viewport IntersectionObserver to pause loop when out of screen
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          ([entry]) => {
            isIntersecting = entry.isIntersecting;
          },
          { threshold: 0.1 }
        );
        observer.observe(container);
      }

      animate();

      handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener("resize", handleResize, { passive: true });

      // Clean up Three.js WebGL resources on unmount
      return () => {
        if (observer) observer.disconnect();
        if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
        if (handleResize) window.removeEventListener("resize", handleResize);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);

        geometriesToDispose.forEach((geo) => geo.dispose());
        titaniumMaterial.dispose();
        rubyRedMaterial.dispose();
        glassMaterial.dispose();
        particleMat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  if (!isMounted) {
    return <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px]" />;
  }

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute inset-0 bg-radial-glow rounded-3xl pointer-events-none" />
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#e11d48]/10 via-[#f43f5e]/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      {/* 3D WebGL Canvas Mounting Box */}
      <div ref={mountRef} className="w-full h-full z-10 cursor-grab active:cursor-grabbing" />
    </div>
  );
}
