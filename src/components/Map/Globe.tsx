// Documentation
// https://vasturiano.github.io/three-globe/
// https://threejs.org/docs/index.html#api/en/

import { Box } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import ThreeGlobe from "three-globe"
import { AmbientLight, WebGLRenderer, Scene, PerspectiveCamera } from "three"
import { useState } from "react"

const lerp = (start, end, alpha) => start + (end - start) * alpha

const Globe = ({ activeFellow, size }) => {
  const globeContainerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 })
  const animationRef = useRef<any>()

  useEffect(() => {
    if (!globeRef.current) {
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000)

      const renderer = new WebGLRenderer({ alpha: true })
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(size, size)

      if (
        globeContainerRef.current &&
        !globeContainerRef.current.hasChildNodes()
      ) {
        ;(globeContainerRef.current as HTMLDivElement).appendChild(
          renderer.domElement
        )
      }

      const globe = new ThreeGlobe({ animateIn: true })
        .globeImageUrl("/images/map.jpg")
        .showAtmosphere(false)

      globeRef.current = globe

      scene.add(new AmbientLight(0xffffff, 3))
      scene.add(globe)
      camera.position.z = 165

      const animate = () => {
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
      }
      animate()
    }
  }, [])

  useEffect(() => {
    const rotateGlobeToCoordinates = (targetLat, targetLong) => {
      const latitudeRadians = (targetLat * Math.PI) / 180
      const longitudeRadians = (targetLong * Math.PI) / 180
      setTargetRotation({
        x: Math.PI / 2 - latitudeRadians,
        y: -longitudeRadians,
      })
    }

    if (
      globeRef.current &&
      activeFellow &&
      activeFellow.lat != null &&
      activeFellow.lon != null
    ) {
      rotateGlobeToCoordinates(
        activeFellow.lat,
        activeFellow.lon
      )
    }
  }, [activeFellow])

  useEffect(() => {
    const animateRotation = () => {
      if (!globeRef.current) return

      // Assume globeRef.current.rotation can be directly manipulated
      // Adjust these values according to your globe's API
      const { x, y } = globeRef.current.rotation
      globeRef.current.rotation.x = lerp(x, targetRotation.x, 0.1)
      globeRef.current.rotation.y = lerp(y, targetRotation.y, 0.1)

      // Continue the animation if the target hasn't been reached
      if (x !== targetRotation.x || y !== targetRotation.y) {
        animationRef.current = requestAnimationFrame(animateRotation)
      }
    }

    animationRef.current = requestAnimationFrame(animateRotation)

    // Cancel the animation if the component unmounts
    return () => cancelAnimationFrame(animationRef.current)
  }, [targetRotation])

  return (
      <Box
        ref={globeContainerRef}
        width={size} // 'base' applies to all sizes, 'sm' applies to screens ≥ 320px
        maxWidth={size} // Max width of the globe
        height="auto" // Adjust the height accordingly
        style={{ aspectRatio: "1 / 1" }}
      />
  )
}

export default Globe
