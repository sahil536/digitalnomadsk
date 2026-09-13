'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function NetworkOrb() {
  const mount = useRef(null);

  useEffect(() => {
    const element = mount.current;
    if (!element) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    element.appendChild(renderer.domElement);

    const system = new THREE.Group();
    system.rotation.set(-0.24, 0.25, 0);
    scene.add(system);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.04, 2),
      new THREE.MeshBasicMaterial({ color: 0x7fdbed, wireframe: true, transparent: true, opacity: 0.64 })
    );
    system.add(wire);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.56, 1),
      new THREE.MeshBasicMaterial({ color: 0x40678f, wireframe: true, transparent: true, opacity: 0.12 })
    );
    system.add(core);

    const ring = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(Array.from({ length: 90 }, (_, i) => {
        const angle = (i / 90) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * 2.36, Math.sin(angle) * .72, 0);
      })),
      new THREE.LineBasicMaterial({ color: 0x6b63ff, transparent: true, opacity: 0.46 })
    );
    ring.rotation.x = 1.15;
    ring.rotation.z = -.32;
    system.add(ring);

    const rayGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1.45, .48, .65), new THREE.Vector3(1.55, -.48, .25)
    ]);
    const ray = new THREE.Line(rayGeometry, new THREE.LineBasicMaterial({ color: 0xb7fffb, transparent: true, opacity: .78 }));
    system.add(ray);

    const starPositions = [];
    for (let i = 0; i < 160; i += 1) {
      const radius = 2.5 + Math.random() * 2.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions.push(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
    }
    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0x9edff0, size: .025, transparent: true, opacity: .68 }));
    scene.add(stars);

    let width = 1;
    let height = 1;
    const resize = () => {
      width = Math.max(element.clientWidth, 1);
      height = Math.max(element.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      system.rotation.y += .0022;
      system.rotation.z += .0007;
      core.rotation.y -= .003;
      ring.rotation.z += .002;
      stars.rotation.y -= .00038;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      wire.geometry.dispose(); wire.material.dispose(); core.geometry.dispose(); core.material.dispose();
      ring.geometry.dispose(); ring.material.dispose(); ray.geometry.dispose(); ray.material.dispose();
      starsGeometry.dispose(); stars.material.dispose(); renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="orb-visual" aria-label="An abstract animated agent network illustration">
      <div className="orb-canvas" ref={mount} />
      <div className="system-tag tag-agent"><i /> <span>Agentic systems<strong>Multi-agent orchestration</strong></span></div>
      <div className="system-tag tag-model"><i /> <span>ML operations<strong>Production-grade models</strong></span></div>
      <div className="system-tag tag-secure"><i /> <span>Secure by design<strong>Trusted systems</strong></span></div>
    </div>
  );
}
