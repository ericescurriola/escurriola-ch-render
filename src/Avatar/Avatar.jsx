import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Html } from '@react-three/drei'
import './Avatar.css'

function Model({ url }) {
  const { scene } = useGLTF(url)
  const [cache, setCache] = useState({})

  if (!cache[url]) {
    const annotations = []

    scene.traverse((o) => {
      if (o.userData.prop) {
        annotations.push(
          <Html key={o.uuid} position={[o.position.x, o.position.y, o.position.z]} distanceFactor={0.25}>
            <div className="annotation">{o.userData.prop}</div>
          </Html>
        )
      }
    })

    console.log('Caching JSX for url ' + url)
    setCache({
      ...cache,
      [url]: <primitive object={scene}>{annotations}</primitive>
    })
  }
  return cache[url]
}

export default function Avatar() {

  return (
    <>
      <Canvas camera={{ position: [2, 1, 3], near: 1 }}>
        <Environment
          preset="forest"
        />
        <group>
          <Model url="./models/porsche_992_gt3_r_rennsport.glb" />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  )
}
