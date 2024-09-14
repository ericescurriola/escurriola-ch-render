import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Html } from '@react-three/drei'
import './Home.css'

function Model({ url, setLoading }) {
  const { scene } = useGLTF(url, true, undefined, (e) => setLoading(false)) // Mark loading as done when model loads
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

export default function Home() {
  const [loading, setLoading] = useState(true) // Track loading state

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      )}
      <Canvas camera={{ position: [2, 1, 3], near: 1 }}>
        <Environment preset="sunset" />
        <group>
          <Model url="./models/porsche_992_gt3_r_rennsport.glb" setLoading={setLoading} />
        </group>
        <OrbitControls />
      </Canvas>
    </>
  )
}
