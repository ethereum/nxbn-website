import { Box, Center, Flex, Image } from "@chakra-ui/react"

type ImageSplitContentProps = {
  image: string
  imageBorder: "round" | "left" | "right" | "none"
  imageSide: "left" | "right"
  children: React.ReactNode
}

const ImageSplitContent = ({
  image,
  imageBorder,
  imageSide,
  children,
}: ImageSplitContentProps) => {
  const imageBorderRadiusOptions = {
    round: 1800,
    left: "120px 400px",
    right: "400px 120px",
    none: "none",
  }

  const wrapperStyle = {
    left: {
      position: "relative",
      display: "inline-block",
      borderRadius: imageBorderRadiusOptions[imageBorder],
      "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: imageBorderRadiusOptions[imageBorder],
        border: "7px solid #034057", // Adjust based on your color needs
        mixBlendMode: "multiply",
        boxSizing: "border-box",
        opacity: 0.1,
      },
      transition: "transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.1)", // Adjust scale value to control zoom level
      }
    },
    right: {
      position: "relative",
      display: "inline-block",
      borderRadius: imageBorderRadiusOptions[imageBorder],
      "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: imageBorderRadiusOptions[imageBorder],
        border: "7px solid #034057", // Adjust based on your color needs
        mixBlendMode: "multiply",
        boxSizing: "border-box",
        opacity: 0.1,
      },
      transition: "transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.1)", // Adjust scale value to control zoom level
      }
    },
    round: {
      position: "relative",
      display: "inline-block",
      "::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: imageBorderRadiusOptions[imageBorder],
        border: "7px solid #034057", // Adjust based on your color needs
        mixBlendMode: "multiply",
        boxSizing: "border-box",
        opacity: 0.1,
      },
      transition: "transform 0.3s ease-in-out",
      _hover: {
        transform: "scale(1.05)", // Adjust scale value to control zoom level
      }
    },
    none: {},
  }

  return (
    <Flex
      gap={{ base: 8, md: 18, lg: 24 }}
      py={16}
      px={{ base: 8, md: 16 }}
      flexDir={{
        base: "column",
        lg: imageSide === "left" ? "row" : "row-reverse",
      }}
    >
      <Center
        maxW={{ base: "340px", md: "400px", lg: "380px", xl: "460px" }}
        margin="auto"
        overflow='hidden'
        borderRadius={imageBorderRadiusOptions[imageBorder]}
      >
        <Box sx={wrapperStyle[imageBorder]}>
          <Image
            src={image}
            alt=""
            borderRadius={imageBorderRadiusOptions[imageBorder]}
          />
        </Box>
      </Center>
      <Center w="auto" flex={1}>
        {children}
      </Center>
    </Flex>
  )
}

export default ImageSplitContent
