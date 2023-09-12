import React, { useRef } from 'react';
import { Canvas, useLoader, useFrame,extend, useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls,PerspectiveCamera } from '@react-three/drei';


function ModelViewer() {
  const gltfUrl = 'static/scene.gltf'; 
  const modelRef = useRef();  
  const gltf = useLoader(GLTFLoader, gltfUrl);
  return (
    <>
  
   
    
    <div className='rectangle23'>
    <Canvas
      style={{ height: '800px', width: '700px' }}>    
      <OrbitControls
        enableDamping
        dampingFactor={0.5}
        target={[0, 0, 0]} 
      />
      <PerspectiveCamera
        makeDefault
        position={[10,0,5]} //x-axis,y-axis,z-axis
        fov={30}
      />     
      <ambientLight intensity={3} />
      <pointLight position={[2, 2, 2]} intensity={90} />     
      <group ref={modelRef}>
        <primitive 
        object={gltf.scene} 
        ref={modelRef}
        position={[0,0,0]}
        />
      </group>
    </Canvas>
    </div>
    
   
    </>
  );
}
export default ModelViewer;