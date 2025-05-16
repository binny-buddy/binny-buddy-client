'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

interface BinnyModelType {
  position: number[];
}
const POSITION = [
  [0, 2.15, 0],
  [-1, 2.15, 1],
  [1, 2.15, -1],
];

const CupModel = ({ position }: BinnyModelType) => {
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
      position={position}
      rotation={[0, Math.PI / 14, 0]}
      castShadow
    />
  );
};

const ContainerModel = ({ position }: BinnyModelType) => {
  const { scene } = useGLTF('/modeling/delivery.glb'); // GLTF 파일 경로

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
      scale={1.6}
      position={position}
      rotation={[0, Math.PI / 14, 0]}
      castShadow
    />
  );
};
const BottleModel = ({ position }: BinnyModelType) => {
  const { scene } = useGLTF('/modeling/pet.glb'); // GLTF 파일 경로

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
      scale={1.5}
      position={position}
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
    <primitive
      object={scene}
      scale={1.2}
      position={[0, 1.5, 0]}
      receiveShadow
    />
  );
};

interface Props {
  isCup?: boolean;
  isContainer?: boolean;
  isBottle?: boolean;
}
const HomeModel = ({ isCup, isContainer, isBottle }: Props) => {
  let binnys = [];

  if (isCup)
    binnys.push(<CupModel key="cup" position={POSITION[binnys.length]} />);
  if (isBottle)
    binnys.push(
      <BottleModel key="bottle" position={POSITION[binnys.length]} />
    );
  if (isContainer)
    binnys.push(
      <ContainerModel key="container" position={POSITION[binnys.length]} />
    );

  return (
    <div className="w-full h-[360px]">
      <Canvas
        orthographic
        camera={{
          position: [3, 3, 3.5],
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
        {binnys.map((item) => item)}
        <GroundModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HomeModel;
