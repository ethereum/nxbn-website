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

import {
  IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT,
  IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
} from "@/utils/constants"

const lerp = (start, end, alpha) => start + (end - start) * alpha

const Globe = ({ allFellowsFrontmatter }) => {
  const globeContainerRef = useRef(null)
  const globeRef = useRef<any>(null)
  const [activeFellowIndex, setActiveFellowIndex] = useState(0)
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 })
  const animationRef = useRef<any>()

  useEffect(() => {
    if (!globeRef.current) {
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000)

      const renderer = new WebGLRenderer({ alpha: true })
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(380, 380)

      if (globeContainerRef.current) {
        ;(globeContainerRef.current as HTMLDivElement).appendChild(
          renderer.domElement
        )
      }

      const globe = new ThreeGlobe({ animateIn: true })
        .globeImageUrl("/images/map.jpg")
        .showAtmosphere(false)

      if (globeRef.current) {
        globeRef.current = globe
      }

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
      <Center gap={2}>
        <ArrowIcon
          w="40px"
          height="40px"
          transform="rotate(180deg)"
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
          flexDir={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "400px", md: "500px" }}
          bg="#00000050"
          borderRadius="30px"
          minH="156px"
          p="16px"
          gap={3.5}
          overflow="hidden"
          alignItems="center"
          _hover={{
            img: {
              ...IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
            },
          }}
        >
          <Flex>
            <Box
              w="124px"
              h="124px"
              borderRadius="10000px"
              border="2px solid #6F9D39"
              overflow="hidden"
            >
              <Image
                src={allFellowsFrontmatter[activeFellowIndex].image}
                objectFit={"cover"}
                alt=""
                {...IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT}
              />
            </Box>
          </Flex>
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
            <Flex flexWrap="wrap">
              {allFellowsFrontmatter[activeFellowIndex].tags.map(
                (tag, index) => {
                  return (
                    <Text
                      key={index}
                      textStyle="tag"
                      textTransform="lowercase"
                      color="action"
                      bg="#00000020"
                      fontFamily="heading"
                      fontSize={14}
                      letterSpacing={0.7}
                      mb="0.75rem"
                      px={4}
                      py={0.5}
                      mx={1}
                      border="1px solid"
                      borderRadius="4000px"
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
          w="40px"
          height="40px"
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
