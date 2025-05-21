import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SawWaveShader = (pColor) => ({
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color(pColor) }, // Dynamic stroke color
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;

    // Generate a proper saw wave with vertical downstrokes
    float sawWave(float x) {
      float frequency = 3.0; // Number of waves in the viewport
      float wavePos = mod(x * frequency - time, 1.0); // Continuous wave movement

      // Create a vertical drop by forcing a sharp transition
      return wavePos < 0.9 ? wavePos : 0.0;
    }

    void main() {
      float wave = sawWave(vUv.x);
      float threshold = vUv.y; // Compare y-position with the wave function

      // Stroke effect: Show edges of the wave
      if (abs(threshold - wave) < 0.02) { // Thin line effect
        gl_FragColor = vec4(color, 1.0);
      } else {
        discard;
      }
    }
  `,
});

const SawWaveMesh = ({ pColor }) => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[1.5, 1, 1]}>
      <planeGeometry args={[6, 1.5, 100, 50]} />
      <shaderMaterial ref={materialRef} args={[SawWaveShader(pColor)]} transparent />
    </mesh>
  );
};

const SawWave = ({ pColor }) => {
  return (
    <div style={{ width: "500px", height: "200px", overflow: "hidden" }}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight />
        <SawWaveMesh pColor={pColor} />
      </Canvas>
    </div>
  );
};

export default SawWave;
