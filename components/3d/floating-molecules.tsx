"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

function Molecule({
  position,
  scale,
  color,
  speed,
  distort,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed: number
  distort: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  )
}

function AtomicBond({
  start,
  end,
  color,
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: string
}) {
  const ref = useRef<THREE.Mesh>(null)

  const { position, rotation, length } = useMemo(() => {
    const midX = (start[0] + end[0]) / 2
    const midY = (start[1] + end[1]) / 2
    const midZ = (start[2] + end[2]) / 2

    const dx = end[0] - start[0]
    const dy = end[1] - start[1]
    const dz = end[2] - start[2]
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz)

    const rotY = Math.atan2(dx, dz)
    const rotX = Math.atan2(dy, Math.sqrt(dx * dx + dz * dz))

    return {
      position: [midX, midY, midZ] as [number, number, number],
      rotation: [-rotX, rotY, 0] as [number, number, number],
      length: len,
    }
  }, [start, end])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <cylinderGeometry args={[0.02, 0.02, length, 8]} />
      <meshStandardMaterial color={color} transparent opacity={0.4} metalness={0.6} roughness={0.3} />
    </mesh>
  )
}

function MoleculeCluster() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Moleculas principais - cobre e teal */}
      <Molecule position={[-3, 1.5, -2]} scale={0.6} color="#B8783D" speed={1.2} distort={0.3} />
      <Molecule position={[3.5, -1, -3]} scale={0.45} color="#0db5c8" speed={0.8} distort={0.4} />
      <Molecule position={[-2, -2, 1]} scale={0.35} color="#d4a574" speed={1.5} distort={0.25} />
      <Molecule position={[2, 2.5, -1]} scale={0.5} color="#2dd4bf" speed={1} distort={0.35} />
      <Molecule position={[0, -1.5, -4]} scale={0.4} color="#B8783D" speed={0.9} distort={0.3} />
      <Molecule position={[-4, 0, -2]} scale={0.3} color="#0db5c8" speed={1.3} distort={0.2} />
      <Molecule position={[4, 0.5, 0]} scale={0.25} color="#d4a574" speed={1.1} distort={0.25} />

      {/* Ligacoes atomicas */}
      <AtomicBond start={[-3, 1.5, -2]} end={[-2, -2, 1]} color="#B8783D" />
      <AtomicBond start={[3.5, -1, -3]} end={[2, 2.5, -1]} color="#0db5c8" />
      <AtomicBond start={[-2, -2, 1]} end={[0, -1.5, -4]} color="#d4a574" />
    </group>
  )
}

function Particles() {
  const count = 50
  const particlesRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#B8783D" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export function FloatingMolecules() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#B8783D" />
        <pointLight position={[5, -5, 5]} intensity={0.3} color="#0db5c8" />

        <MoleculeCluster />
        <Particles />
      </Canvas>
    </div>
  )
}
