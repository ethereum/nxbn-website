import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { Box } from "@chakra-ui/react";

const GlobeComponent = ({ activeFellow, size }) => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: activeFellow.lat, lng: activeFellow.lon, altitude: 2 }, 0)
      const controls = globeEl.current.controls()
      controls.enableZoom = false
      controls.enableRotate = false
      controls.enablePan = false
    }
  }, [size]);

  useEffect(() => {
    if (globeEl.current && activeFellow) {
      globeEl.current.pointOfView({ lat: activeFellow.lat, lng: activeFellow.lon, altitude: 1.5 }, 1000); // Second argument for smooth transition
    }
  }, [activeFellow]);

  return (
    <Box
      width={size}
      maxWidth={size}
      height="auto"
      style={{ aspectRatio: "1 / 1" }}
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
  );
};

export default GlobeComponent;