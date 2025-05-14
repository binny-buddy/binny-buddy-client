'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

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

  //Math.PI / 4
  return (
    <primitive
      object={scene}
      scale={35}
      position={[0, 0.65, 0]}
      rotation={[0, Math.PI / 14, 0]}
      castShadow
    />
  );
};

const GroundModel = () => {
  const { scene } = useGLTF('/modeling/ground.glb');

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.receiveShadow = true; // 그림자를 받을 수 있도록 설정
      }
    });
  }, [scene]);

  return (
    <primitive object={scene} scale={1.2} position={[0, 0, 0]} receiveShadow />
  );
};

const HomeModel = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        orthographic
        camera={{
          position: [3, 2.5, 3.5],
          fov: 75,
          left: -3.5,
          right: 3.5,
          top: 3.5,
          bottom: -3.5,
        }}
        shadows
      >
        <ambientLight intensity={0.7} />
        {/* <axesHelper args={[200, 200, 200]} /> */}
        <directionalLight
          position={[0, 10, 10]}
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
        <CupModel />
        <GroundModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HomeModel;
