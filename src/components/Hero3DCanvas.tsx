"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Group container for main 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Titanium Orthopaedic / Spine Helix Structure
    const helixGroup = new THREE.Group();
    mainGroup.add(helixGroup);

    // Titanium Material with glass/metal reflections
    const titaniumMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f4c81,
      emissive: 0x001d3d,
      roughness: 0.2,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const jointMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00b8a9,
      emissive: 0x004b49,
      roughness: 0.15,
      metalness: 0.9,
      clearcoat: 1.0,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
    });

    // Create Spine/Helix strand
    const nodeCount = 18;
    const radius = 1.8;
    const heightSpan = 7;

    for (let i = 0; i < nodeCount; i++) {
      const t = i / nodeCount;
      const angle = t * Math.PI * 3;
      const y = (t - 0.5) * heightSpan;

      // Strand A
      const xA = Math.cos(angle) * radius;
      const zA = Math.sin(angle) * radius;
      const meshA = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 32), titaniumMaterial);
      meshA.position.set(xA, y, zA);
      helixGroup.add(meshA);

      // Strand B (opposite)
      const xB = Math.cos(angle + Math.PI) * radius;
      const zB = Math.sin(angle + Math.PI) * radius;
      const meshB = new THREE.Mesh(new THREE.SphereGeometry(0.28, 32, 32), jointMaterial);
      meshB.position.set(xB, y, zB);
      helixGroup.add(meshB);

      // Connecting rungs (Spine Vertebrae / Titanium Implant Bar)
      if (i % 2 === 0) {
        const barCurve = new THREE.LineCurve3(
          new THREE.Vector3(xA, y, zA),
          new THREE.Vector3(xB, y, zB)
        );
        const barGeo = new THREE.TubeGeometry(barCurve, 12, 0.08, 16, false);
        const barMesh = new THREE.Mesh(barGeo, titaniumMaterial);
        helixGroup.add(barMesh);

        // Vertebral Ring around center
        const ringGeo = new THREE.TorusGeometry(radius * 1.15, 0.04, 16, 64);
        const ringMesh = new THREE.Mesh(ringGeo, glassMaterial);
        ringMesh.position.set(0, y, 0);
        ringMesh.rotation.x = Math.PI / 2;
        helixGroup.add(ringMesh);
      }
    }

    // Central Core Implant Ring
    const coreRingGeo = new THREE.TorusGeometry(3.2, 0.12, 32, 100);
    const coreRing = new THREE.Mesh(coreRingGeo, jointMaterial);
    coreRing.rotation.x = Math.PI / 3;
    mainGroup.add(coreRing);

    const outerRingGeo = new THREE.TorusGeometry(4.2, 0.06, 32, 100);
    const outerRing = new THREE.Mesh(outerRingGeo, glassMaterial);
    outerRing.rotation.y = Math.PI / 4;
    mainGroup.add(outerRing);

    // 2. Floating Particles Field (Medical DNA / Light Orbs)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00b8a9,
      size: 0.15,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Volumetric Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x2563eb, 3.0);
    mainLight.position.set(10, 15, 10);
    scene.add(mainLight);

    const cyanLight = new THREE.PointLight(0x00b8a9, 4, 30);
    cyanLight.position.set(-10, -5, 5);
    scene.add(cyanLight);

    const mouseLight = new THREE.PointLight(0x2563eb, 5, 25);
    mouseLight.position.set(0, 0, 8);
    scene.add(mouseLight);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = -(y / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotations
      helixGroup.rotation.y = elapsedTime * 0.35;
      coreRing.rotation.z = elapsedTime * 0.2;
      outerRing.rotation.x = elapsedTime * -0.15;
      particles.rotation.y = elapsedTime * 0.05;

      mainGroup.rotation.y = targetX * 0.4;
      mainGroup.rotation.x = -targetY * 0.3;

      // Dynamic light tracking
      mouseLight.position.x = targetX * 8;
      mouseLight.position.y = targetY * 8;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center">
      {/* Background Soft Glow & Grid Accent */}
      <div className="absolute inset-0 bg-radial-glow rounded-3xl pointer-events-none" />
      <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#2563eb]/10 via-[#00b8a9]/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      {/* 3D WebGL Canvas Mounting Box */}
      <div ref={mountRef} className="w-full h-full z-10 cursor-grab active:cursor-grabbing" />
    </div>
  );
}
