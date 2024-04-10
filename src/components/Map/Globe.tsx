"use client"

// Documentation
// https://vasturiano.github.io/three-globe/
// https://threejs.org/docs/index.html#api/en/

import { Box, Center, Divider, Image, Flex, Text } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import ThreeGlobe from "three-globe"
import { AmbientLight, WebGLRenderer, Scene, PerspectiveCamera } from "three"
import { useState } from "react"

import { ArrowIcon } from "@/components/icons"
import { H4 } from "@/components/Headings"

const lerp = (start, end, alpha) => start + (end - start) * alpha

const Globe = ({ allFellowsFrontmatter }) => {
  const globeContainerRef = useRef(null)
  const globeRef = useRef(null)
  const [activeFellowIndex, setActiveFellowIndex] = useState(0)
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 })
  const animationRef = useRef()

  useEffect(() => {
    if (!globeRef.current) {
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000)

      const renderer = new WebGLRenderer({ alpha: true })
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(380, 380)

      globeContainerRef.current.appendChild(renderer.domElement)

      const globe = new ThreeGlobe({ alpha: true, animateIn: true })
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
      allFellowsFrontmatter[activeFellowIndex] &&
      allFellowsFrontmatter[activeFellowIndex].lat != null &&
      allFellowsFrontmatter[activeFellowIndex].lon != null
    ) {
      rotateGlobeToCoordinates(
        allFellowsFrontmatter[activeFellowIndex].lat,
        allFellowsFrontmatter[activeFellowIndex].lon
      )
    }
  }, [activeFellowIndex, allFellowsFrontmatter])

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
    <Center flex={1} flexDir="column">
      <Center>
        <Box
          ref={globeContainerRef}
          width={{ base: "100%", sm: "380px" }} // 'base' applies to all sizes, 'sm' applies to screens ≥ 320px
          maxWidth="380px" // Max width of the globe
          height="auto" // Adjust the height accordingly
          style={{ aspectRatio: "1 / 1" }}
        />
      </Center>
      <Center>
        <Divider
          borderLeft="2px solid"
          borderColor="#9DCE64"
          m="auto"
          mt="-190px"
          height="245px"
        />
      </Center>
      <Center>
        <ArrowIcon
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            setActiveFellowIndex(
              (activeFellowIndex - 1 + allFellowsFrontmatter.length) %
                allFellowsFrontmatter.length
            )
          }}
        />
        <Flex
          flex={1}
          w={{ base: "100%", sm: "380px" }}
          bg="backgroundHighlight"
          borderRadius="23px"
          p={4}
          gap={3.5}
        >
          <Image
            src={allFellowsFrontmatter[activeFellowIndex].image}
            w="80px"
            h="124px"
            borderRadius="15px"
            border="1px solid #6F9D39"
            objectFit={"cover"}
          />
          <Center
            flexDir="column"
            justifyContent="left"
            alignItems="left"
            gap={2.5}
          >
            <Text
              m={0}
              textStyle="footer-text"
              color="bodyHover"
            >{`Fellowship Cohort ${allFellowsFrontmatter[activeFellowIndex].cohort}`}</Text>
            <Box>
              <H4 m={0}>
                {allFellowsFrontmatter[activeFellowIndex].fellowName}
              </H4>
              <Text m={0} textStyle="footer-text">
                {allFellowsFrontmatter[activeFellowIndex].country}
              </Text>
            </Box>
            <Flex>
              {allFellowsFrontmatter[activeFellowIndex].tags.map(
                (tag, index) => {
                  return (
                    <Text
                      key={index}
                      textStyle="tag"
                      color="actionHover"
                      fontSize={10}
                      p={1}
                      m={0}
                    >
                      {tag}
                    </Text>
                  )
                }
              )}
            </Flex>
          </Center>
        </Flex>
        <ArrowIcon
          transform="rotate(180deg)"
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            setActiveFellowIndex(
              (activeFellowIndex + 1 + allFellowsFrontmatter.length) %
                allFellowsFrontmatter.length
            )
          }}
        />
      </Center>
    </Center>
  )
}

export default Globe