import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import {
	Environment,
	OrbitControls,
	Html,
	useProgress,
} from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useState } from 'react';
import { PugContainer, PugSpinner } from './pug-loader';

const Scene = () => {
  const gltf = useLoader(GLTFLoader, '/pug_test-1.glb');
	console.log('ddd', gltf);
	return (
		<>
			<primitive object={gltf.scene} />
		</>
	);
}

const PixelPug = () => {
  return (
    <PugContainer>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [50, 20, 70], fov: 32 }}>
        <Suspense fallback={null}>
          <Scene />
          <spotLight position={[20, 10, 10]} angle={20} penumbra={5} />
          <ambientLight intensity={0.30} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls autoRotate/>
        </Suspense>
      </Canvas>
    </PugContainer>
  )
}

export default PixelPug