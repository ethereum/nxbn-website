import React, { useEffect, useRef } from "react"
import Globe from "react-globe.gl"
import { Box } from "@chakra-ui/react"

interface GlobeComponentProps {
  activeFellow: { lat: number; lon: number }
  size: number | undefined
}

const GlobeComponent: React.FC<GlobeComponentProps> = ({
  activeFellow,
  size,
}) => {
  const globeEl = useRef<any>()

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: activeFellow.lat, lng: activeFellow.lon, altitude: 2 },
        0
      )
      const controls = globeEl.current.controls()
      controls.enableZoom = false
      controls.enableRotate = false
      controls.enablePan = false
    }
  }, [size])

  useEffect(() => {
    if (globeEl.current && activeFellow) {
      globeEl.current.pointOfView(
        { lat: activeFellow.lat, lng: activeFellow.lon, altitude: 1.5 },
        1000
      ) // Smooth transition
    }
  }, [activeFellow])

  return (
    <Box
      width={size}
      maxWidth={size}
      height="auto"
      sx={{ aspectRatio: "1 / 1" }}
    >
      <Globe
        ref={globeEl}
        globeImageUrl="/images/map.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        width={size}
        height={size}
      />
    </Box>
  )
}

export default GlobeComponent
