'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { BinnyType } from '@/types/character';

const CupModel = () => {
  const { scene } = useGLTF('/modeling/cup.glb'); // GLTF 파일 경로

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true; // 그림자를 생성
        child.receiveShadow = true; // 그림자를 받을 수 있도록 설정
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={48}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 10, 0]}
      castShadow
    />
  );
};

const ContainerModel = () => {
  const { scene } = useGLTF('/modeling/delivery.glb'); // GLTF 파일 경로

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true; // 그림자를 생성
        child.receiveShadow = true; // 그림자를 받을 수 있도록 설정
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={3}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 10, 0]}
      castShadow
    />
  );
};

const BottleModel = () => {
  const { scene } = useGLTF('/modeling/pet.glb'); // GLTF 파일 경로

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true; // 그림자를 생성
        child.receiveShadow = true; // 그림자를 받을 수 있도록 설정
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={2.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 10, 0]}
      castShadow
    />
  );
};

const BinnyModel = ({ type }: { type: BinnyType }) => {
  return (
    <div className="w-full h-[360px]">
      <Canvas
        orthographic
        camera={{
          position: [3, 2, 3.5],
          fov: 75,
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
        }}
        shadows
      >
        <ambientLight intensity={1} />
        {/* <axesHelper args={[200, 200, 200]} /> */}
        <directionalLight
          position={[4, 10, 10]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048} // 그림자 품질 설정
          shadow-mapSize-height={2048} // 그림자 품질 설정
          shadow-bias={-0.009} // 그림자의 왜곡을 줄이기 위한 설정
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]} // 바닥을 수평으로 회전
          position={[0, -1, 0]} // 약간 아래로 이동
          receiveShadow // 그림자를 받을 수 있도록 설정
        >
          <planeGeometry args={[10, 10]} /> {/* 바닥 크기 */}
          <shadowMaterial
            transparent={true} // 투명도 활성화
            opacity={0.5} // 그림자만 보이도록 설정 (0.5는 그림자 투명도)
          />
        </mesh>
        {type === 'cup' && <CupModel />}
        {type === 'bottle' && <BottleModel />}
        {type === 'container' && <ContainerModel />}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BinnyModel;
